// sync-upstream.mjs — Lanxu Space 上游自持同步脚本
// 零依赖，Node 20+。每天由 GitHub Actions 定时跑（见 .github/workflows/sync-upstream.yml），
// 也可以本地跑：node scripts/sync-upstream.mjs [站点仓库根目录]
// 只做一件事：把上游目录拉下来校验后存成 data/*.json 快照，失败时绝不覆盖旧快照。
// 校验规则照抄站内 upstream.js / module-source.js 里前端用的同一套 validate*，
// 所以写进去的快照前端一定能读。
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.argv[2] || process.cwd();
const DATA = join(ROOT, "data");
const TIMEOUT_MS = 15000;

const REPO = "Valiumlove/MultiClientProxyCore";
const RAW = `https://raw.githubusercontent.com/${REPO}/main`;
const JSDELIVR = `https://cdn.jsdelivr.net/gh/${REPO}@main`;

// 上游死了也别全军覆没：目录只依赖这一个仓库 + 两个站。
// 规则文件本身有 1185×3 个，全镜像不现实；只镜像置顶的 10 个常用规则 ×3 客户端，
// 以及 egern-source.js 里写死的 6 个 Egern 文件。Advertising / Privacy 这类几十万行的
// 大表刻意排除——它们只走 jsDelivr 第二通道，不进仓库。
const FEATURED_RULES = [
  "Apple", "GitHub", "YouTube", "OpenAI", "Telegram",
  "Lan", "Netflix", "Spotify", "Microsoft", "Steam",
];

const EGERN_FILES = [
  { url: "https://raw.githubusercontent.com/jnlaoshu/MySelf/main/Egern/Widget/Widgets.yaml", out: "data/egern-widgets-collection.yaml" },
  { url: "https://raw.githubusercontent.com/CallMeKingsley97/useful-module/main/github-stars.yaml", out: "data/egern-github-stars.yaml" },
  { url: "https://raw.githubusercontent.com/CallMeKingsley97/useful-module/main/life-progress.yaml", out: "data/egern-life-progress.yaml" },
  { url: "https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Egern.yaml", out: "data/egern-sub-store.yaml" },
  { url: "https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule", out: "data/egern-boxjs.sgmodule" },
  { url: "https://raw.githubusercontent.com/Script-Hub-Org/Script-Hub/main/modules/script-hub.surge.sgmodule", out: "data/egern-script-hub.sgmodule" },
];

async function fetchText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function fetchJsonWithFallbacks(urls) {
  let lastError;
  for (const url of urls) {
    try {
      return { data: JSON.parse(await fetchText(url)), via: url };
    } catch (e) { lastError = e; }
  }
  throw lastError ?? new Error("all channels failed");
}

// —— 校验：与前端 validate* 保持一致 ——
function validateIndex(index, client, fileRe) {
  if (!index || index.client !== client || !Array.isArray(index.rules) || !index.rules.length)
    throw new Error(`${client} 索引格式不正确`);
  for (const e of index.rules) {
    if (!e || typeof e.name !== "string" || !e.name.trim() ||
        typeof e.file !== "string" || !fileRe.test(e.file) ||
        !Number.isInteger(e.total_line_count) || e.total_line_count < 0)
      throw new Error(`${client} 索引包含无效条目: ${e?.name}`);
  }
}

function validateModules(entries) {
  if (!Array.isArray(entries) || !entries.length) throw new Error("模块目录为空");
  const slugs = new Set();
  for (const e of entries) {
    if (!e || typeof e.slug !== "string" || !/^[A-Za-z0-9_-]+$/.test(e.slug) ||
        slugs.has(e.slug) || typeof e.name !== "string" || !e.name.trim() ||
        e.rawUrl !== `https://son.zhiaon.top/m/${e.slug}.sgmodule`)
      throw new Error(`模块目录包含无效条目: ${e?.slug}`);
    slugs.add(e.slug);
  }
}

function validateEgernHub(catalog) {
  if (!Array.isArray(catalog)) throw new Error("Egern Hub 目录不是数组");
  const resources = catalog.filter((e) =>
    e?.kind === "modules" || (e?.kind === "widgets" && ["egern", "derived"].includes(e.format)));
  if (!resources.length) throw new Error("Egern Hub 目录未找到模块或小组件");
  for (const e of resources) {
    if (typeof e.id !== "string" || typeof e.name !== "string" ||
        typeof e.file !== "string" || !/^modules\/[^?#]+\.yaml$/.test(e.file) ||
        e.file.split("/").includes(".."))
      throw new Error(`Egern Hub 目录包含无效资源: ${e?.id}`);
  }
  return resources;
}

async function fetchEgernHubCatalog() {
  const home = await fetchText("https://egern.pages.dev/");
  const path = home.match(/assets\/data\/catalog\.[a-z0-9]+\.json/i)?.[0];
  if (!path) throw new Error("Egern Hub 首页没有提供目录地址");
  return JSON.parse(await fetchText(new URL(path, "https://egern.pages.dev/").href));
}

async function writeJson(relPath, data) {
  const p = join(ROOT, relPath);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, JSON.stringify(data));
}

async function writeText(relPath, text) {
  const p = join(ROOT, relPath);
  await mkdir(dirname(p), { recursive: true });
  await writeFile(p, text);
}

// 并发池：镜像文件多，分批拉
async function mapPool(items, size, fn) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(...await Promise.all(items.slice(i, i + size).map(fn)));
  }
  return out;
}

const status = { updated: new Date().toISOString(), sources: [], mirrors: { ok: [], failed: [] } };
let failed = false;

async function syncCatalog(id, urls, out, validate) {
  try {
    const { data, via } = await fetchJsonWithFallbacks(urls);
    validate(data);
    await writeJson(out, data);
    const count = Array.isArray(data) ? data.length : (data.rules?.length ?? data.resources?.length ?? 0);
    status.sources.push({ id, status: "ok", via: via.includes("jsdelivr") ? "jsdelivr" : "raw", count });
    console.log(`ok   ${id}: ${count} 条 (${via.includes("jsdelivr") ? "jsDelivr" : "raw"})`);
    return data;
  } catch (e) {
    failed = true;
    status.sources.push({ id, status: "failed", error: String(e.message ?? e) });
    console.error(`FAIL ${id}: ${e.message ?? e}（保留旧快照）`);
    return null;
  }
}

const indexes = {};
indexes.surge = await syncCatalog("surge-index",
  [`${RAW}/index/Surge.json`, `${JSDELIVR}/index/Surge.json`],
  "data/surge-index.json",
  (d) => validateIndex(d, "Surge", /^rules\/Surge\/[^/]+\.list$/));
indexes.egern = await syncCatalog("egern-index",
  [`${RAW}/index/Egern.json`, `${JSDELIVR}/index/Egern.json`],
  "data/egern-index.json",
  (d) => validateIndex(d, "Egern", /^rules\/Egern\/[^/]+\.yaml$/));
indexes.mihomo = await syncCatalog("mihomo-index",
  [`${RAW}/index/Mihomo.json`, `${JSDELIVR}/index/Mihomo.json`],
  "data/mihomo-index.json",
  (d) => validateIndex(d, "Mihomo", /^rules\/Mihomo\/[^/]+\.yaml$/));
indexes.loon = await syncCatalog("loon-index",
  [`${RAW}/index/Loon.json`, `${JSDELIVR}/index/Loon.json`],
  "data/loon-index.json",
  (d) => validateIndex(d, "Loon", /^rules\/Loon\/[^/]+\.list$/));
indexes.quantumultx = await syncCatalog("quantumultx-index",
  [`${RAW}/index/QuantumultX.json`, `${JSDELIVR}/index/QuantumultX.json`],
  "data/quantumultx-index.json",
  (d) => validateIndex(d, "QuantumultX", /^rules\/QuantumultX\/[^/]+\.list$/));
indexes.shadowrocket = await syncCatalog("shadowrocket-index",
  [`${RAW}/index/Shadowrocket.json`, `${JSDELIVR}/index/Shadowrocket.json`],
  "data/shadowrocket-index.json",
  (d) => validateIndex(d, "Shadowrocket", /^rules\/Shadowrocket\/[^/]+\.list$/));
indexes.stash = await syncCatalog("stash-index",
  [`${RAW}/index/Stash.json`, `${JSDELIVR}/index/Stash.json`],
  "data/stash-index.json",
  (d) => validateIndex(d, "Stash", /^rules\/Stash\/[^/]+\.yaml$/));
indexes.singbox = await syncCatalog("singbox-index",
  [`${RAW}/index/SingBox.json`, `${JSDELIVR}/index/SingBox.json`],
  "data/singbox-index.json",
  (d) => validateIndex(d, "SingBox", /^rules\/SingBox\/[^/]+\.json$/));
await syncCatalog("modules-source",
  ["https://son.zhiaon.top/data/modules.json"],
  "data/modules-source.json", validateModules);

// Egern Hub：先读已落盘的快照做兜底校验源，拉不到新目录也不报错退出、只记 failed
try {
  const catalog = await fetchEgernHubCatalog();
  validateEgernHub(catalog);
  await writeJson("data/egern-hub-catalog.json",
    { source: "https://egern.pages.dev/", updated: new Date().toISOString(), resources: catalog });
  status.sources.push({ id: "egern-hub-catalog", status: "ok", via: "egern.pages.dev", count: catalog.length });
  console.log(`ok   egern-hub-catalog: ${catalog.length} 条`);
} catch (e) {
  failed = true;
  status.sources.push({ id: "egern-hub-catalog", status: "failed", error: String(e.message ?? e) });
  console.error(`FAIL egern-hub-catalog: ${e.message ?? e}（保留旧快照）`);
}

// —— 镜像置顶规则文件：只用刚拉到的索引里的 file 路径，不硬编码路径 ——
const mirrorJobs = [];
for (const [client, index] of Object.entries(indexes)) {
  if (!index) continue;
  for (const entry of index.rules) {
    if (!FEATURED_RULES.includes(entry.name)) continue;
    const filename = entry.file.split("/").pop();
    mirrorJobs.push({
      label: `${client}/${filename}`,
      urls: [`${RAW}/${entry.file}`, `${JSDELIVR}/${entry.file}`],
      out: `data/mirror/${client}/${filename}`,
    });
  }
}
for (const f of EGERN_FILES) {
  mirrorJobs.push({ label: f.out.split("/").pop(), urls: [f.url], out: f.out });
}

await mapPool(mirrorJobs, 8, async (job) => {
  for (const url of job.urls) {
    try {
      const text = await fetchText(url);
      if (!text.trim()) throw new Error("empty file");
      await writeText(job.out, text);
      status.mirrors.ok.push(job.label);
      return;
    } catch { /* try next channel */ }
  }
  failed = true;
  status.mirrors.failed.push(job.label);
  console.error(`FAIL mirror ${job.label}（保留旧镜像）`);
});

await writeJson("data/sync-status.json", status);
console.log(`\n镜像: ${status.mirrors.ok.length} 成功, ${status.mirrors.failed.length} 失败`);
if (status.mirrors.failed.length) console.log("失败:", status.mirrors.failed.join(", "));
if (failed) { console.error("部分来源失败，旧快照已保留，退出码 1"); process.exit(1); }
console.log("全部来源同步成功。");
