// Public module bodies stay cached for at most a day; rule files stay in memory.
// All persistence is optional: a blocked/slow browser cache never blocks a read.
function createResourceContentLoader({
  files = new Map(),
  sources = new Map(),
  fetchImpl = globalThis.fetch.bind(globalThis),
  cacheStorage = globalThis.caches,
  now = () => Date.now(),
} = {}) {
  const CACHE_NAME = "lanxu-space-resource-content-v1";
  const LIVE_TTL = 24 * 60 * 60 * 1000;
  const SNAPSHOT_TTL = 15 * 60 * 1000;
  const MAX_ENTRIES = 40;
  const MAX_BYTES = 4 * 1024 * 1024;
  const MAX_FILE_BYTES = 256 * 1024;
  const records = new Map();
  const location = globalThis.location;
  const secureOrigin = location && (
    location.protocol === "https:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === "[::1]" || location.hostname === "::1"
  );
  const canPersist = Boolean(secureOrigin && cacheStorage &&
    typeof cacheStorage.open === "function");
  let cachePromise;
  let writeQueue = Promise.resolve();

  function within(promise, milliseconds, fallback = null) {
    return new Promise((resolve) => {
      const timer = setTimeout(() => resolve(fallback), milliseconds);
      Promise.resolve(promise).then((value) => {
        clearTimeout(timer);
        resolve(value);
      }, () => {
        clearTimeout(timer);
        resolve(fallback);
      });
    });
  }

  function openCache() {
    if (!canPersist) return Promise.resolve(null);
    if (!cachePromise) {
      cachePromise = Promise.resolve().then(() => cacheStorage.open(CACHE_NAME))
        .catch(() => null);
    }
    return cachePromise;
  }

  function signature(resource) {
    return JSON.stringify([
      resource.updatedAt || "",
      resource.snapshotUrl || "",
    ]);
  }

  function persistentResource(resource) {
    return resource.type === "module" || resource.type === "widget";
  }

  function validContent(content) {
    return typeof content === "string" && content.trim().length > 0 &&
      !/^\s*<(?:!doctype|html)\b/i.test(content);
  }

  async function diskRead(url, version) {
    const cache = await openCache();
    if (!cache) return null;
    const response = await cache.match(url);
    if (!response) return null;
    const stamp = response.headers.get("x-lanxu-saved-at");
    const savedAt = stamp === null ? NaN : Number(stamp);
    const savedVersion = response.headers.get("x-lanxu-version");
    const size = Number(response.headers.get("x-lanxu-bytes"));
    if (!Number.isFinite(savedAt) || savedAt > now() ||
      now() - savedAt >= LIVE_TTL ||
      savedVersion !== encodeURIComponent(version) ||
      !Number.isFinite(size) || size <= 0 || size > MAX_FILE_BYTES) return null;
    const content = await response.text();
    return validContent(content) ? { content, savedAt } : null;
  }

  async function trimCache(cache) {
    const keys = await within(cache.keys(), 500, []);
    const entries = await Promise.all(keys.map(async (key) => {
      const response = await within(cache.match(key), 100);
      if (!response) return null;
      const stamp = response.headers.get("x-lanxu-saved-at");
      const savedAt = stamp === null ? NaN : Number(stamp);
      const size = Number(response.headers.get("x-lanxu-bytes"));
      return { key, savedAt, size };
    }));
    let count = 0;
    let bytes = 0;
    // Keep the newest entries first; malformed and expired entries are removed.
    entries.filter(Boolean).sort((first, second) =>
      second.savedAt - first.savedAt).forEach((entry) => {
      entry.keep = Number.isFinite(entry.savedAt) && entry.savedAt <= now() &&
        now() - entry.savedAt < LIVE_TTL && Number.isFinite(entry.size) &&
        entry.size > 0 && entry.size <= MAX_FILE_BYTES &&
        count < MAX_ENTRIES && bytes + entry.size <= MAX_BYTES;
      if (entry.keep) {
        count += 1;
        bytes += entry.size;
      }
    });
    await Promise.all(entries.filter((entry) => entry && !entry.keep)
      .map((entry) => within(cache.delete(entry.key), 100)));
  }

  function persist(url, version, content, savedAt, isCurrent) {
    if (!canPersist) return;
    const size = new Blob([content]).size;
    if (size > MAX_FILE_BYTES) return;
    // Writes and pruning share one queue so simultaneous prefetches cannot race
    // one another's entry/byte limits. Callers never wait for these disk writes.
    writeQueue = writeQueue.then(async () => {
      if (!isCurrent()) return;
      const cache = await within(openCache(), 100);
      if (!cache || !isCurrent()) return;
      const response = new Response(content, { headers: {
        "content-type": "text/plain; charset=utf-8",
        "x-lanxu-saved-at": String(savedAt),
        "x-lanxu-version": encodeURIComponent(version),
        "x-lanxu-bytes": String(size),
      } });
      const stored = await within(Promise.resolve(cache.put(url, response))
        .then(() => true), 1000, false);
      if (stored) await trimCache(cache);
    }).catch(() => { /* Cache denial/quota failure must not affect downloads. */ });
  }

  function clearExpired() {
    for (const [url, record] of records) {
      const owned = files.get(url) === record.promise;
      if (owned && (record.pending || record.expiresAt > now())) continue;
      if (owned) {
        files.delete(url);
        sources.delete(url);
      }
      records.delete(url);
    }
  }

  async function download(url, timeout) {
    const response = await fetchImpl(url, {
      signal: AbortSignal.timeout(timeout),
      credentials: "omit",
    });
    if (!response.ok) throw new Error(`Upstream HTTP ${response.status}`);
    const content = await response.text();
    if (!validContent(content)) throw new Error("文件为空或上游返回了网页内容");
    return content;
  }

  function read(resource) {
    if (!resource?.sourceUrl) {
      return typeof resource?.content === "string"
        ? Promise.resolve(resource.content)
        : Promise.reject(new Error("资源没有配置内容"));
    }
    clearExpired();
    const url = resource.sourceUrl;
    const version = signature(resource);
    const previous = records.get(url);
    if (previous && previous.version === version &&
      files.get(url) === previous.promise &&
      (previous.pending || previous.expiresAt > now())) {
      if (previous.source) sources.set(url, previous.source);
      return previous.promise;
    }
    sources.delete(url);
    const record = { version, pending: true, expiresAt: 0, source: null };
    let request;
    const isCurrent = () => records.get(url) === record && files.get(url) === request;
    const complete = (content, source, savedAt) => {
      if (isCurrent()) {
        record.pending = false;
        record.source = source;
        record.expiresAt = savedAt + (source === "live" ? LIVE_TTL : SNAPSHOT_TTL);
        sources.set(url, source);
      }
      return content;
    };
    request = Promise.resolve().then(async () => {
      try {
        if (canPersist && persistentResource(resource)) {
          const cached = await within(diskRead(url, version), 100);
          if (cached) return complete(cached.content, "live", cached.savedAt);
        }
        let content;
        let source = "live";
        try {
          content = await download(url, resource.snapshotUrl ? 8000 : 30000);
        } catch (error) {
          if (!resource.snapshotUrl) throw error;
          content = await download(resource.snapshotUrl, 8000);
          source = "snapshot";
        }
        const savedAt = now();
        complete(content, source, savedAt);
        if (source === "live" && persistentResource(resource) && isCurrent())
          persist(url, version, content, savedAt, isCurrent);
        return content;
      } catch (error) {
        // A failed earlier version must not remove a newer request for this URL.
        if (isCurrent()) {
          files.delete(url);
          sources.delete(url);
          records.delete(url);
        }
        throw error;
      }
    });
    record.promise = request;
    records.set(url, record);
    files.set(url, request);
    return request;
  }

  return { read, clearExpired, whenIdle: () => writeQueue };
}
