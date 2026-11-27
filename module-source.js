const MODULE_SOURCE = {
  siteUrl: "https://son.zhiaon.top/",
  indexUrl: "https://son.zhiaon.top/data/modules.json",
};

const moduleCategoryMap = new Map([
  ["adblock", "privacy"],
  ["clean", "purify"],
  ["unlock", "unlock"],
  ["media", "media"],
  ["scripts", "development"],
  ["apple", "system"],
  ["subs", "translation"],
  ["rules", "network"],
  ["tools", "network"],
]);

const moduleCategoryStyles = {
  privacy: { icon: "shield", background: "#f7efe5", color: "#FF9500" },
  purify: { icon: "sparkles", background: "#edf3e6", color: "#34C759" },
  unlock: { icon: "lock", background: "#f4ede5", color: "#FF9500" },
  media: { icon: "play-circle", background: "#f5eaf0", color: "#FF2D55" },
  development: { icon: "terminal", background: "#edf0f7", color: "#007AFF" },
  system: { icon: "apple", background: "#eff1ed", color: "#8E8E93" },
  translation: { icon: "message", background: "#f1eef7", color: "#AF52DE" },
  network: { icon: "globe", background: "#eaf2f7", color: "#007AFF" },
  other: { icon: "layers", background: "#f0f0eb", color: "#8E8E93" },
};

function validateModuleCatalog(entries) {
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new Error("模块目录为空或格式不正确。");
  }
  const slugs = new Set();
  for (const entry of entries) {
    if (
      !entry ||
      typeof entry.slug !== "string" ||
      !/^[A-Za-z0-9_-]+$/.test(entry.slug) ||
      slugs.has(entry.slug) ||
      typeof entry.name !== "string" ||
      !entry.name.trim() ||
      entry.rawUrl !== `${MODULE_SOURCE.siteUrl}m/${entry.slug}.sgmodule`
    ) {
      throw new Error("模块目录包含无效条目或重复标识。");
    }
    slugs.add(entry.slug);
  }
}

function moduleRepositoryUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

function createModuleResources(entries) {
  validateModuleCatalog(entries);
  const availableCategories = new Set(
    categories.map((category) => category.id),
  );
  return entries
    .map((entry) => {
      const mappedCategory =
        moduleCategoryMap.get(entry.category?.slug) || "other";
      const category = availableCategories.has(mappedCategory)
        ? mappedCategory
        : "other";
      const tags = Array.isArray(entry.tags)
        ? entry.tags.filter((tag) => typeof tag === "string" && tag.trim())
        : [];
      const author = typeof entry.author === "string" ? entry.author : "";
      const updatedAt =
        typeof entry.updatedAt === "string" &&
        Number.isFinite(Date.parse(entry.updatedAt))
          ? entry.updatedAt
          : null;
      return {
        id: `module:${entry.slug}`,
        name: entry.name,
        type: "module",
        category,
        ...moduleCategoryStyles[category],
        description:
          typeof entry.description === "string" && entry.description.trim()
            ? entry.description
            : "暂无模块描述。",
        tags: tags.slice(0, 3),
        filename: `${entry.slug}.sgmodule`,
        sourceUrl: entry.rawUrl,
        repositoryUrl: moduleRepositoryUrl(entry.repositoryUrl),
        originPageUrl: `${MODULE_SOURCE.siteUrl}modules/${encodeURIComponent(entry.slug)}`,
        sourceName: "Surge Modules",
        author,
        version: typeof entry.version === "string" ? entry.version : "",
        updatedAt,
        sourceDate: updatedAt,
        health: ["ok", "broken", "unknown"].includes(entry.health)
          ? entry.health
          : "unknown",
        searchText: [
          entry.name,
          entry.description,
          author,
          entry.category?.name,
          ...tags,
          typeof entry.py?.full === "string" ? entry.py.full : "",
          typeof entry.py?.initials === "string" ? entry.py.initials : "",
        ]
          .filter((value) => typeof value === "string")
          .join(" "),
      };
    })
    .sort(
      (first, second) =>
        (Date.parse(second.updatedAt) || 0) -
        (Date.parse(first.updatedAt) || 0),
    );
}

async function fetchModuleResources(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-cache",
      credentials: "omit",
    });
    if (!response.ok)
      throw new Error(`模块目录请求失败（${response.status}）。`);
    return createModuleResources(await response.json());
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchModuleCatalog() {
  try {
    return {
      modules: await fetchModuleResources(MODULE_SOURCE.indexUrl),
      mode: "live",
    };
  } catch {
    try {
      return {
        modules: await fetchModuleResources("data/modules-source.json"),
        mode: "snapshot",
      };
    } catch {
      throw new Error("模块来源与本地目录快照均加载失败，请稍后重试。");
    }
  }
}
