const icons = {
  "arrow-right": '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  "arrow-up-right": '<path d="M6 18 18 6M6 6h12v12"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.5 13.1A8.5 8.5 0 0 1 10.9 3.5a8.5 8.5 0 1 0 9.6 9.6Z"/>',
  "play-circle": '<circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  layers:
    '<path d="m12 3 10 6-10 6L2 9 12 3Zm-10 12 10 6 10-6M2 12l10 6 10-6"/>',
  box: '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5M3 7l9 5v10m-4.5-17.5 9 5"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  network:
    '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4m-7 4v-4h14v4"/>',
  command:
    '<path d="M9 9V5a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v13a3 3 0 1 0 3-3H5a3 3 0 1 0 3 3V9Z"/>',
  terminal:
    '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m6 9 3 3-3 3m6 0h5"/>',
  shield:
    '<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>',
  message:
    '<path d="M21 11.5A8.5 8.5 0 0 1 12.5 20a9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z"/>',
  sparkles:
    '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm7-2 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/>',
  sliders:
    '<path d="M4 7h4m4 0h8M4 17h8m4 0h4"/><circle cx="10" cy="7" r="2"/><circle cx="14" cy="17" r="2"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>',
  file: '<path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 13h8m-8 4h6"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  x: '<path d="m6 6 12 12M6 18 18 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
  apple:
    '<path d="M12 7c-2-2-5-2-7 0-3 3-1 9 2 13 1 1 2 1 3 0s3-1 4 0 2 1 3 0a18 18 0 0 0 3-5c-4-1-4-6-1-7-2-3-5-2-7-1Z"/><path d="M12 6c0-3 2-4 4-4 0 3-2 4-4 4Z"/>',
  github:
    '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4c0-1 .1-1.5-.5-2 4.5-.5 6.5-2.5 6.5-6a4.5 4.5 0 0 0-1.2-3.2c.4-1 .4-2.5-.2-3.8-1.5-.2-3.7 1.3-3.7 1.3a13 13 0 0 0-7.8 0S7 2.8 5.5 3a6 6 0 0 0-.2 3.8A4.5 4.5 0 0 0 4 10c0 3.5 2 5.5 6.5 6-.6.5-.6 1-.5 2v4"/>',
  send: '<path d="m22 2-7 20-4-9-9-4L22 2Zm-11 11L22 2"/>',
  window:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h18"/>',
  lock: '<rect x="4" y="10" width="16" height="12" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v3"/>',
  fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M4 10h10m0 3h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9l-4-4m2 2-2 2 3 3"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 4h2m4 0h2m-8 3h2"/>',
  gauge: '<path d="M4 19a10 10 0 1 1 16 0M12 12l5-5M5 12h1m12 0h1M12 5v1"/><circle cx="12" cy="16" r="2"/>',
  wifi: '<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r=".8"/>',
  cpu: '<rect x="5" y="5" width="14" height="14" rx="3"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"/>',
  chart: '<path d="M4 3v17h17M8 15l4-5 4 2 5-7"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-9 12a3 3 0 0 0 6 0"/>',
  repeat: '<path d="m16 2 4 4-4 4M4 11V9a3 3 0 0 1 3-3h13M8 22l-4-4 4-4m12-1v2a3 3 0 0 1-3 3H4"/>',
  currency: '<circle cx="12" cy="12" r="9"/><path d="M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9m3-10v12"/>',
  book: '<path d="M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1Zm0 0v15"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/>',
  link: '<path d="m10 13 4-4m-6 1-3 3a4 4 0 0 0 6 6l3-3m-4-8 3-3a4 4 0 0 1 6 6l-3 3"/>',
  key: '<circle cx="8" cy="8" r="5"/><path d="m12 12 9 9m-6-6 3-3m0 6 3-3"/>',
};

function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.file}</svg>`;
}

function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

const PAGE_SIZE = 12;
const tr = (zh, en, params) => siteI18n.text(zh, en, params);
const egernResources = typeof EGERN_RESOURCES === "undefined" ? [] : EGERN_RESOURCES;
const egernNonRuleResources = egernResources.filter((resource) => resource.type !== "rule");
const additionalProxyClientIds = Object.keys(PROXY_RULE_UPSTREAMS);
let resources = [...egernNonRuleResources, ...moduleExamples];
let ruleResources = [];
let egernRuleResources = [];
let mihomoRuleResources = [];
const additionalRuleResources = Object.fromEntries(additionalProxyClientIds.map((client) => [client, []]));
const additionalCatalogLoading = Object.fromEntries(additionalProxyClientIds.map((client) => [client, false]));
const additionalCatalogModes = Object.fromEntries(additionalProxyClientIds.map((client) => [client, "loading"]));
let egernHubResources = [];
let importedModules = [];
let saved = new Set();
let selectedResource = null;
let selectedDetailTab = "code";
let selectedRawContent = null;
let rawPreviewError = false;
let catalogLoading = false;
let egernCatalogLoading = false;
let mihomoCatalogLoading = false;
let mihomoCatalogMode = "loading";
let egernHubLoading = false;
let moduleCatalogLoading = false;
let catalogMode = "loading";
let moduleCatalogMode = "loading";
let egernHubMode = "loading";
let egernHubUpdatedAt = "";
let toastTimer;
const rawFiles = new Map();
const rawContentSources = new Map();
const resourceContentLoader = createResourceContentLoader({
  files: rawFiles,
  sources: rawContentSources,
});
let rawPreviewRequest = 0;
let contentPrefetchTimer;
let contentPrefetchTarget = null;
const pendingContentPrefetches = new Set();
const state = {
  client: "surge",
  type: "all",
  category: "all",
  query: "",
  savedOnly: false,
  sort: "recommended",
  page: 1,
};
const legacyFavorites = {
  apple: "surge:Apple",
  github: "surge:GitHub",
  telegram: "surge:Telegram",
  lan: "surge:Lan",
  microsoft: "surge:Microsoft",
  privacy: "surge:Privacy",
  "egern:apple-rule": "egern:Apple",
  "egern:google-rule": "egern:Google",
  "egern:telegram-rule": "egern:Telegram",
};

try {
  const storedSaved = JSON.parse(
    localStorage.getItem("surge-space-saved") || "[]",
  );
  if (Array.isArray(storedSaved)) {
    saved = new Set(
      storedSaved
        .filter((id) => typeof id === "string")
        .map((id) => legacyFavorites[id] || id),
    );
  }
  const storedTheme = localStorage.getItem("surge-space-theme");
  if (storedTheme === "dark")
    document.documentElement.dataset.theme = "dark";
} catch {
  /* Keep working when browser storage is unavailable. */
}

const searchInput = document.getElementById("search-input");
const resourceGrid = document.getElementById("resource-grid");
const resourceDialog = document.getElementById("resource-dialog");
const guideDialog = document.getElementById("guide-dialog");
const policyInput = document.getElementById("policy-input");

function escapeHtml(value) {
  return String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
}

function formatNumber(number) {
  return Number(number).toLocaleString(siteI18n.locale);
}

function resourceClient(resource) {
  return ["surge", "egern", "mihomo", ...additionalProxyClientIds].includes(resource.client)
    ? resource.client
    : "surge";
}

function clientName(resource) {
  return {
    surge: "Surge",
    egern: "Egern",
    mihomo: "Mihomo",
    ...proxyRuleClientNames,
  }[resourceClient(resource)];
}

function supportsResourceType(type) {
  const types = {
    surge: ["rule", "module"],
    egern: ["widget", "rule", "module"],
    mihomo: ["rule"],
    loon: ["rule", "module"],
    quantumultx: ["rule", "module"],
    shadowrocket: ["rule"],
    singbox: ["rule"],
    stash: ["rule"],
  };
  return type === "all" || (types[state.client] || []).includes(type);
}

function matchesClient(resource) {
  return resourceClient(resource) === state.client;
}

function needsPolicy(resource) {
  return resource.type === "rule" &&
    (resourceClient(resource) === "surge" || resource.reference?.includes("{policy}"));
}

function hasReference(resource) {
  return resource.type === "rule" &&
    (resourceClient(resource) === "surge" || Boolean(resource.reference));
}

function resourceInstallUrl(resource) {
  const client = resourceClient(resource);
  const supported = (client === "surge" && resource.type === "module") ||
    (client === "egern" && ["module", "widget"].includes(resource.type));
  if (!supported) return "";
  let source;
  try {
    source = resource.sourceUrl || (resource.installSourcePath
      ? new URL(resource.installSourcePath, document.baseURI).href : "");
    const parsed = new URL(source);
    if (!["https:", "http:"].includes(parsed.protocol) || !parsed.hostname) return "";
  } catch {
    return "";
  }
  if (client === "surge") return `surge:///install-module?url=${encodeURIComponent(source)}`;
  return `egern:/modules/new?name=${encodeURIComponent(resource.name)}&url=${encodeURIComponent(source)}`;
}

function typeName(resource) {
  const client = resource.client || state.client;
  if (resource.type === "module" && client === "quantumultx") return tr("重写", "Rewrites");
  if (resource.type === "module" && client === "loon") return tr("插件", "Plugins");
  return {
    rule: tr("规则集", "Rule sets"),
    module: tr("功能模块", "Modules"),
    widget: tr("小组件", "Widgets"),
  }[resource.type] || tr("资源", "Resources");
}

function typeLabel(resource) {
  const client = resource.client || state.client;
  if (resource.type === "module" && client === "quantumultx") return "REWRITE";
  if (resource.type === "module" && client === "loon") return "PLUGIN";
  return { rule: "RULE SET", module: "MODULE", widget: "WIDGET" }[resource.type] || "RESOURCE";
}

function resourceExtension(resource) {
  return resource.filename?.match(/\.[a-z0-9]+$/i)?.[0] || ".yaml";
}

function resourceIconMarkup(resource, brand = getResourceBrand(resource)) {
  const glyph = getResourceGlyph(resource);
  if (!brand && !resource.thumbnailUrl) return icon(glyph);
  const fallback = icon(glyph).replace(
    'class="icon"',
    'class="icon app-icon-fallback"',
  );
  if (resource.thumbnailUrl) {
    return `<img class="app-icon resource-thumbnail" src="${escapeHtml(resource.thumbnailUrl)}" alt="${escapeHtml(tr("{name} 预览", "{name} preview", { name: resourceI18n(resource).name }))}" width="40" height="40" loading="lazy" decoding="async" referrerpolicy="no-referrer">${fallback}`;
  }
  return `<img class="app-icon" src="${escapeHtml(brand.src)}"${brand.fallbackSrc ? ` data-fallback-src="${escapeHtml(brand.fallbackSrc)}"` : ""} alt="${escapeHtml(tr("{name} 图标", "{name} icon", { name: brand.label }))}" width="32" height="32" loading="lazy" decoding="async" referrerpolicy="no-referrer">${fallback}`;
}

// Never leave a broken image in a resource card or its details.
document.addEventListener(
  "error",
  (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.matches(".app-icon"))
      return;
    if (image.dataset.fallbackSrc) {
      const fallback = image.dataset.fallbackSrc;
      delete image.dataset.fallbackSrc;
      image.src = fallback;
    } else image.hidden = true;
  },
  true,
);

function resourceMarkup(resource) {
  const view = resourceI18n(resource);
  const isSaved = saved.has(resource.id);
  const id = escapeHtml(resource.id);
  const name = escapeHtml(view.name);
  const brand = getResourceBrand(resource);
  const provenance = resource.author
    ? [resource.author, resource.version].filter(Boolean).join(" · ")
    : resource.sourceUrl ? "" : tr("本地配置示例", "Local example");
  const meta = resource.type === "rule" && Number.isFinite(resource.lineCount)
    ? tr("{count} 条规则", "{count} rules", { count: formatNumber(resource.lineCount) }) : resourceExtension(resource);
  const installUrl = resourceInstallUrl(resource);
  const importLabel = tr("一键导入", "Import");
  const importTitle = tr("在 {client} 中导入 {name}", "Import {name} into {client}", { client: clientName(resource), name: view.name });
  return `<article class="resource-card" data-resource="${id}" data-resource-category="${escapeHtml(resource.category)}">
    <div class="card-body">
      <div class="card-top">
        <div class="resource-icon${brand ? " has-brand-icon" : ""}${resource.thumbnailUrl ? " has-thumbnail" : ""}" style="--icon-bg:${resource.background};--icon-color:${resource.color}">${resourceIconMarkup(resource, brand)}</div>
        <div class="card-top-right">
          <span class="type-label ${resource.type}">${typeLabel(resource)}</span>
          <button class="favorite-button ${isSaved ? "saved" : ""}" data-save="${id}" aria-label="${escapeHtml(isSaved ? tr("取消收藏 {name}", "Unsave {name}", { name: view.name }) : tr("收藏 {name}", "Save {name}", { name: view.name }))}" aria-pressed="${isSaved}">${icon("bookmark")}</button>
        </div>
      </div>
      <button class="card-title-button" data-preview="${id}"><h3 class="card-title">${name}${resource.featured ? `<span class="featured-label">${tr("常用", "Popular")}</span>` : ""}</h3></button>
      <p class="card-description">${escapeHtml(view.description)}</p>
      <div class="card-tags">${view.tags.map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <p class="card-provenance"><span class="client-badge ${resourceClient(resource)}">${clientName(resource)}</span>${provenance ? `<span>${escapeHtml(provenance)}</span>` : ""}</p>
    </div>
    <div class="card-footer${installUrl ? " has-import" : ""}">
      <span class="card-meta">${icon("file")}${escapeHtml(meta)}</span>
      <div class="card-actions">
        <button class="preview-button" data-preview="${id}">${tr("查看配置", "View config")}</button>
        <button class="copy-button" data-copy="${id}">${icon("copy")}${resource.sourceUrl ? tr("复制链接", "Copy link") : tr("复制配置", "Copy config")}</button>
      </div>
      ${installUrl ? `<a class="card-import-button" data-import="${id}" href="${escapeHtml(installUrl)}" title="${escapeHtml(importTitle)}" aria-label="${escapeHtml(`${importLabel} · ${importTitle}`)}">${icon("arrow-up-right")}${importLabel}</a>` : ""}
    </div>
  </article>`;
}

function renderCategories() {
  document.getElementById("category-list").innerHTML = categories
    .map((category) => {
      const count = resources.filter(
        (resource) =>
          matchesClient(resource) &&
          (category.id === "all" || resource.category === category.id) &&
          (state.type === "all" || resource.type === state.type),
      ).length;
      return `<button class="category-button ${state.category === category.id && !state.savedOnly ? "active" : ""}" data-category="${category.id}" aria-pressed="${state.category === category.id && !state.savedOnly}">
      <span class="category-glyph" aria-hidden="true">${icon(category.icon)}</span><span>${escapeHtml(localizedCategoryName(category))}</span><span class="category-count">${formatNumber(count)}</span>
    </button>`;
    })
    .join("");
}

function resourceSearchText(resource) {
  const english = resourceI18n(resource, "en");
  const typeTerms = {
    rule: "rules rule sets 规则集",
    module: resourceClient(resource) === "quantumultx" ? "rewrites 重写" : resourceClient(resource) === "loon" ? "plugins 插件" : "modules 功能模块",
    widget: "widgets 小组件",
  };
  return [clientName(resource), resource.name, resource.description, ...resource.tags,
    resource.type, typeTerms[resource.type] || "", resource.filename, resource.author || "",
    resource.searchText || "", english.name, english.description, ...english.tags,
    english.searchText || ""].join(" ").toLocaleLowerCase();
}

function renderCatalogStatuses() {
  for (const source of [
    { id: "upstream-status", client: "Surge", loading: catalogLoading, mode: catalogMode, count: ruleResources.length },
    { id: "egern-source-status", client: "Egern", loading: egernCatalogLoading, mode: egernCatalogMode, count: egernRuleResources.length },
    { id: "mihomo-source-status", client: "Mihomo", loading: mihomoCatalogLoading, mode: mihomoCatalogMode, count: mihomoRuleResources.length },
    { id: "module-source-status", client: "Surge", loading: moduleCatalogLoading, mode: moduleCatalogMode, count: importedModules.length, modules: true },
  ]) {
    const status = document.getElementById(source.id);
    const params = { client: source.client, count: formatNumber(source.count), kind: source.modules ? tr("模块", "modules") : tr("规则集", "rule sets") };
    status.textContent = source.loading
      ? tr("正在读取 {client} 上游目录…", "Loading the {client} catalog…", params)
      : source.mode === "live"
        ? tr("已连接上游 · {count} 个 {client} {kind}", "Connected · {count} {client} {kind}", params)
        : source.count
          ? source.mode === "curated"
            ? tr("上游暂不可用 · 显示精选的 {count} 个 {client} {kind}", "Source unavailable · {count} curated {client} {kind}", params)
            : tr("上游暂不可用 · 显示本地目录快照 {count} 个 {client} {kind}", "Source unavailable · Bundled catalog: {count} {client} {kind}", params)
          : tr("{client} 目录暂时无法加载，请稍后重试。", "The {client} catalog is unavailable. Please try again later.", params);
    status.dataset.mode = source.loading ? "loading" : source.count ? source.mode : "error";
  }
  const hubStatus = document.getElementById("egern-hub-status");
  const params = { count: formatNumber(egernHubResources.length), date: egernHubUpdatedAt.slice(0, 10) };
  hubStatus.textContent = egernHubLoading
    ? tr("正在读取 Egern 模块与小组件目录…", "Loading Egern modules and widgets…")
    : egernHubMode === "live"
      ? tr("已连接 Egern Hub · {count} 个模块与小组件", "Connected to Egern Hub · {count} modules and widgets", params)
      : egernHubMode === "snapshot"
        ? tr("Egern Hub 暂不可用 · 显示本地目录快照 {count} 个项目", "Egern Hub unavailable · Bundled catalog: {count} resources", params) +
          (egernHubUpdatedAt ? tr("（更新于 {date}）", " (updated {date})", params) : "")
        : tr("Egern Hub 目录暂时无法加载。", "The Egern Hub catalog is currently unavailable.");
  hubStatus.dataset.mode = egernHubMode;
}

function renderResources() {
  if (!supportsResourceType(state.type)) {
    state.type = "all";
    state.page = 1;
  }
  const query = state.query.trim().toLocaleLowerCase();
  const refreshing = state.client === "egern"
    ? egernCatalogLoading || egernHubLoading
    : state.client === "mihomo"
      ? mihomoCatalogLoading
      : state.client === "surge"
        ? catalogLoading || moduleCatalogLoading
        : additionalCatalogLoading[state.client];
  const loading = refreshing && !resources.some((resource) => matchesClient(resource) &&
    (state.type === "all" || resource.type === state.type));
  const visible = resources.filter(
    (resource) =>
      matchesClient(resource) &&
      (state.type === "all" || resource.type === state.type) &&
      (state.category === "all" || resource.category === state.category) &&
      (!state.savedOnly || saved.has(resource.id)) &&
      (!query || resourceSearchText(resource).includes(query)),
  );
  if (state.sort === "name")
    visible.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
  if (state.sort === "type")
    visible.sort((a, b) => a.type.localeCompare(b.type));
  if (state.sort === "latest")
    visible.sort((a, b) =>
      (b.updatedAt || "").localeCompare(a.updatedAt || ""),
    );
  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  state.page = Math.min(state.page, pageCount);
  const offset = (state.page - 1) * PAGE_SIZE;
  siteMotion.release(resourceGrid);
  resourceGrid.innerHTML = visible
    .slice(offset, offset + PAGE_SIZE)
    .map(resourceMarkup)
    .join("");
  resourceGrid.hidden = !visible.length;
  resourceGrid.setAttribute(
    "aria-busy",
    String(loading),
  );
  document.getElementById("empty-state").hidden =
    !!visible.length || loading;
  document.getElementById("empty-description").textContent =
    state.savedOnly && !visible.length
      ? tr("点击资源卡片右上角的书签，收藏你喜欢的小组件、规则与模块。", "Use the bookmark on a resource card to save widgets, rule sets and modules.")
      : state.client === "mihomo" && !mihomoRuleResources.length
        ? tr("Mihomo 规则目录暂时无法加载，请稍后重试。", "The Mihomo rule catalog is unavailable. Please try again later.")
      : state.client === "mihomo" && state.type === "module"
        ? tr("Mihomo 当前收录规则集，切换「规则集」查看。", "Mihomo currently offers rule sets. Select Rule sets to browse them.")
      : ["loon", "quantumultx"].includes(state.client) && state.type === "module"
        ? tr("当前尚未收录{type}资源；规则集可在「规则集」中查看。", "No {type} resources are cataloged yet. Browse rule sets under Rule sets.", { type: typeName({ type: "module", client: state.client }) })
      : state.client !== "egern" && state.type === "widget"
        ? tr("小组件收录于 Egern，切换客户端查看。", "Widgets are available for Egern. Switch clients to browse them.")
      : tr("换个关键词，或看看其他分类。", "Try another keyword or browse a different category.");
  document.getElementById("results-total").textContent =
    tr("{count} 个资源", "{count} resources", { count: formatNumber(visible.length) });
  document.getElementById("results-label").textContent = state.savedOnly
    ? tr("我的收藏", "Saved resources")
    : state.category !== "all"
      ? localizedCategoryName(categories.find((category) => category.id === state.category) || categories[0])
      : state.type === "all" ? tr("全部资源", "All resources") : typeName({ type: state.type });
  document.getElementById("clear-filters").hidden =
    state.type === "all" &&
    state.category === "all" &&
    !state.savedOnly &&
    !query;
  document.getElementById("pagination").hidden = pageCount <= 1;
  document.getElementById("page-summary").textContent =
    tr("第 {page} / {total} 页", "Page {page} / {total}", { page: state.page, total: pageCount });
  document.getElementById("previous-page").disabled = state.page <= 1;
  document.getElementById("next-page").disabled = state.page >= pageCount;
  document.querySelectorAll("[data-type]").forEach((button) => {
    button.hidden = !supportsResourceType(button.dataset.type);
    if (button.dataset.type === "module") {
      const label = button.querySelector("[data-i18n]");
      if (label) label.textContent = typeName({ type: "module", client: state.client });
    }
    const active = button.dataset.type === state.type;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".floating-nav [data-nav]").forEach((button) => {
    button.hidden = button.dataset.nav !== "saved" && !supportsResourceType(button.dataset.nav);
    if (button.dataset.nav === "module") {
      const label = button.querySelector(".nav-label");
      if (label) label.textContent = typeName({ type: "module", client: state.client });
    }
    const active = state.savedOnly
        ? button.dataset.nav === "saved"
        : button.dataset.nav === state.type;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.querySelectorAll("[data-client]").forEach((button) => {
    const active = button.dataset.client === state.client;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const clientResources = resources.filter(matchesClient);
  const availableSaved = clientResources.filter((resource) =>
    saved.has(resource.id),
  ).length;
  document.getElementById("saved-count").textContent = availableSaved;
  document.getElementById("nav-saved-count").textContent = availableSaved;
  document.getElementById("nav-saved-count").hidden = !availableSaved;
  document
    .getElementById("saved-filter")
    .classList.toggle("active", state.savedOnly);
  document
    .getElementById("saved-filter")
    .setAttribute("aria-pressed", String(state.savedOnly));
  const counts = { all: clientResources.length };
  for (const type of ["rule", "module", "widget"])
    counts[type] = clientResources.filter((resource) => resource.type === type).length;
  for (const [type, count] of Object.entries(counts)) {
    const element = document.getElementById(`${type}-count`);
    if (element) element.textContent = formatNumber(count);
  }
  renderCatalogStatuses();
  document.querySelectorAll(".upstream-bar").forEach((bar) => {
    const sourceClient = bar.classList.contains("mihomo-source-bar") ? "mihomo" :
      bar.classList.contains("egern-source-bar") ||
      bar.classList.contains("egern-hub-source-bar") ? "egern" : "surge";
    bar.hidden = state.client !== sourceClient;
  });
  renderCategories();
  siteMotion.observe(resourceGrid);
}

function rebuildResources() {
  const hubUrls = new Set(
    egernHubResources.flatMap((resource) =>
      [resource.sourceUrl, resource.upstreamUrl].filter(Boolean),
    ),
  );
  const additionalEgernResources = egernNonRuleResources.filter(
    (resource) =>
      !hubUrls.has(resource.sourceUrl) &&
      !hubUrls.has(resource.repositoryUrl),
  );
  resources = [
    ...additionalEgernResources.filter((resource) => resource.type === "widget").slice(0, 3),
    ...egernHubResources.filter((resource) => resource.type === "widget").slice(0, 3),
    ...ruleResources.slice(0, 3),
    ...egernRuleResources.slice(0, 3),
    ...mihomoRuleResources.slice(0, 3),
    ...additionalProxyClientIds.flatMap((client) => additionalRuleResources[client].slice(0, 3)),
    ...importedModules.slice(0, 3),
    ...additionalEgernResources.filter((resource) => resource.type === "module").slice(0, 3),
    ...egernHubResources.filter((resource) => resource.type === "module").slice(0, 3),
    ...additionalEgernResources.filter((resource) => resource.type === "widget").slice(3),
    ...egernHubResources.filter((resource) => resource.type === "widget").slice(3),
    ...egernRuleResources.slice(3),
    ...mihomoRuleResources.slice(3),
    ...additionalProxyClientIds.flatMap((client) => additionalRuleResources[client].slice(3)),
    ...additionalEgernResources.filter((resource) => resource.type === "module").slice(3),
    ...egernHubResources.filter((resource) => resource.type === "module").slice(3),
    ...ruleResources.slice(3),
    ...importedModules.slice(3),
    ...moduleExamples,
  ];
  renderResources();
}

async function loadCatalog() {
  if (catalogLoading) return;
  catalogLoading = true;
  const refreshButton = document.getElementById("refresh-upstream");
  const status = document.getElementById("upstream-status");
  refreshButton.disabled = true;
  status.textContent = tr("正在读取 Surge 上游目录…", "Loading the Surge catalog…");
  renderResources();
  try {
    const { index, mode } = await fetchCatalog();
    if (mode === "live" || catalogMode !== "live") {
      ruleResources = createRuleResources(index);
      catalogMode = mode;
    }
    status.textContent =
      catalogMode === "live"
        ? `已连接上游 · ${formatNumber(ruleResources.length)} 个 Surge 规则集`
        : `上游暂不可用 · 显示本地目录快照 ${formatNumber(ruleResources.length)} 个规则集`;
    status.dataset.mode = catalogMode;
    return mode === "live";
  } catch {
    status.textContent = "目录暂时无法加载，请点击刷新重试。";
    status.dataset.mode = ruleResources.length ? catalogMode : "error";
    return false;
  } finally {
    catalogLoading = false;
    refreshButton.disabled = false;
    rebuildResources();
  }
}

let egernCatalogMode = "loading";

async function loadAdditionalProxyCatalog(clientId) {
  if (!additionalProxyClientIds.includes(clientId) || additionalCatalogLoading[clientId]) return false;
  additionalCatalogLoading[clientId] = true;
  renderResources();
  try {
    const { index, mode } = await fetchProxyRuleCatalog(clientId);
    if (mode === "live" || additionalCatalogModes[clientId] !== "live") {
      additionalRuleResources[clientId] = createProxyRuleResources(index, clientId);
      additionalCatalogModes[clientId] = mode;
    }
    return mode === "live";
  } catch {
    if (!additionalRuleResources[clientId].length) additionalCatalogModes[clientId] = "error";
    return false;
  } finally {
    additionalCatalogLoading[clientId] = false;
    rebuildResources();
  }
}

async function loadMihomoCatalog() {
  if (mihomoCatalogLoading) return;
  mihomoCatalogLoading = true;
  const refreshButton = document.getElementById("refresh-mihomo-upstream");
  const status = document.getElementById("mihomo-source-status");
  refreshButton.disabled = true;
  status.textContent = tr("正在读取 Mihomo 上游规则目录…", "Loading the Mihomo rule catalog…");
  renderResources();
  try {
    const { index, mode } = await fetchMihomoCatalog();
    if (mode === "live" || mihomoCatalogMode !== "live") {
      mihomoRuleResources = createMihomoRuleResources(index);
      mihomoCatalogMode = mode;
    }
    status.textContent = mihomoCatalogMode === "live"
      ? `已连接上游 · ${formatNumber(mihomoRuleResources.length)} 个 Mihomo 规则集`
      : `上游暂不可用 · 显示本地目录快照 ${formatNumber(mihomoRuleResources.length)} 个 Mihomo 规则集`;
    status.dataset.mode = mihomoCatalogMode;
    return mode === "live";
  } catch {
    if (!mihomoRuleResources.length) mihomoCatalogMode = "error";
    status.textContent = "Mihomo 规则目录暂时无法加载，请稍后重试。";
    status.dataset.mode = mihomoRuleResources.length ? mihomoCatalogMode : "error";
    return false;
  } finally {
    mihomoCatalogLoading = false;
    refreshButton.disabled = false;
    rebuildResources();
  }
}

async function loadEgernCatalog() {
  if (egernCatalogLoading) return;
  egernCatalogLoading = true;
  const refreshButton = document.getElementById("refresh-egern-upstream");
  const status = document.getElementById("egern-source-status");
  refreshButton.disabled = true;
  status.textContent = tr("正在读取 Egern 上游规则目录…", "Loading the Egern rule catalog…");
  renderResources();
  try {
    const { index, mode } = await fetchEgernCatalog();
    if (mode === "live" || egernCatalogMode !== "live") {
      egernRuleResources = createEgernRuleResources(index);
      egernCatalogMode = mode;
    }
    status.textContent =
      egernCatalogMode === "live"
        ? `已连接上游 · ${formatNumber(egernRuleResources.length)} 个 Egern 规则集`
        : `上游暂不可用 · 显示本地目录快照 ${formatNumber(egernRuleResources.length)} 个 Egern 规则集`;
    status.dataset.mode = egernCatalogMode;
    return mode === "live";
  } catch {
    if (!egernRuleResources.length) {
      egernRuleResources = egernResources.filter((resource) => resource.type === "rule");
      egernCatalogMode = "curated";
    }
    status.textContent =
      `上游暂不可用 · 显示精选的 ${formatNumber(egernRuleResources.length)} 个 Egern 规则集`;
    status.dataset.mode = egernCatalogMode;
    return false;
  } finally {
    egernCatalogLoading = false;
    refreshButton.disabled = false;
    rebuildResources();
  }
}

async function loadEgernHub() {
  if (egernHubLoading) return;
  egernHubLoading = true;
  const refreshButton = document.getElementById("refresh-egern-hub");
  const status = document.getElementById("egern-hub-status");
  refreshButton.disabled = true;
  status.textContent = tr("正在读取 Egern 模块与小组件目录…", "Loading Egern modules and widgets…");
  renderResources();
  try {
    const { resources: hubResources, mode, updatedAt } =
      await fetchEgernHubCollection();
    if (mode === "live" || egernHubMode !== "live") {
      egernHubResources = hubResources;
      egernHubMode = mode;
      egernHubUpdatedAt = updatedAt;
    }
    return mode === "live";
  } catch {
    if (!egernHubResources.length) egernHubMode = "error";
    return false;
  } finally {
    egernHubLoading = false;
    refreshButton.disabled = false;
    rebuildResources();
  }
}

async function loadModules() {
  if (moduleCatalogLoading) return;
  moduleCatalogLoading = true;
  const button = document.getElementById("refresh-modules");
  const status = document.getElementById("module-source-status");
  button.disabled = true;
  status.textContent = tr("正在读取模块目录…", "Loading the module catalog…");
  renderResources();
  try {
    const { modules, mode } = await fetchModuleCatalog();
    if (mode === "live" || moduleCatalogMode !== "live") {
      importedModules = modules;
      moduleCatalogMode = mode;
    }
    status.textContent =
      moduleCatalogMode === "live"
        ? `已连接来源 · ${formatNumber(importedModules.length)} 个模块`
        : `来源暂不可用 · 显示本地目录快照 ${formatNumber(importedModules.length)} 个模块`;
    status.dataset.mode = moduleCatalogMode;
    return mode === "live";
  } catch {
    status.textContent = "模块目录暂时无法加载，请点击刷新重试。";
    status.dataset.mode = importedModules.length ? moduleCatalogMode : "error";
    return false;
  } finally {
    moduleCatalogLoading = false;
    button.disabled = false;
    rebuildResources();
  }
}

function resetFilters() {
  Object.assign(state, {
    type: "all",
    category: "all",
    query: "",
    savedOnly: false,
    page: 1,
  });
  searchInput.value = "";
  renderResources();
}

function toast(message) {
  clearTimeout(toastTimer);
  document.getElementById("toast-message").textContent = message;
  document.getElementById("toast").classList.add("show");
  toastTimer = setTimeout(
    () => document.getElementById("toast").classList.remove("show"),
    2700,
  );
}

async function writeClipboard(content) {
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = content;
    textArea.style.cssText = "position:fixed;left:-9999px;top:0";
    (document.querySelector("dialog[open]") || document.body).append(textArea);
    textArea.select();
    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }
    textArea.remove();
    return copied;
  }
}

function validPolicy() {
  return (
    policyInput.value.trim().length > 0 && !/[,\r\n]/.test(policyInput.value)
  );
}

function ruleReference(resource) {
  if (resourceClient(resource) === "mihomo") {
    return createMihomoReference(resource, policyInput.value.trim() || tr("你的策略组", "Your policy"));
  }
  if (additionalProxyClientIds.includes(resourceClient(resource))) {
    return createProxyRuleReference(resource, policyInput.value.trim() || tr("你的策略组", "Your policy"));
  }
  if (resource.reference) {
    const policy = policyInput.value.trim() || tr("你的策略组", "Your policy");
    return (resource.reference || resource.sourceUrl || resource.content || "")
      .replaceAll('"{policy}"', JSON.stringify(policy))
      .replaceAll("{policy}", policy);
  }
  return `RULE-SET,${resource.sourceUrl},${policyInput.value.trim() || tr("你的策略组", "Your policy")}`;
}

function updateDialogControls() {
  if (!selectedResource) return;
  const requiresPolicy = needsPolicy(selectedResource);
  const rawTab = selectedDetailTab === "raw";
  const blocked = rawTab
    ? selectedRawContent === null
    : requiresPolicy && !validPolicy();
  document.getElementById("dialog-copy").disabled = blocked;
  document.getElementById("code-copy").disabled = requiresPolicy && !validPolicy();
  const copyLabel = rawTab
    ? tr("复制完整原文", "Copy full source")
    : hasReference(selectedResource)
      ? tr("复制引用", "Copy reference")
      : selectedResource.sourceUrl
        ? tr("复制资源链接", "Copy resource link")
        : tr("复制完整配置", "Copy full config");
  document.getElementById("dialog-copy").innerHTML =
    `${icon("copy")} ${copyLabel}`;
  if (hasReference(selectedResource))
    document.getElementById("dialog-code").textContent =
      ruleReference(selectedResource);
  const invalid = policyInput.value.length > 0 && !validPolicy();
  policyInput.setAttribute("aria-invalid", String(invalid));
  const singbox = resourceClient(selectedResource) === "singbox";
  document.querySelector('label[for="policy-input"]').textContent = singbox
    ? tr("出站", "Outbound")
    : tr("策略或策略组", "Policy or policy group");
  document.getElementById("policy-help").textContent = invalid
    ? tr("策略名称不能包含逗号或换行。", "Policy names cannot contain commas or line breaks.")
    : singbox
      ? tr("填写 Sing-box route 中已有的 outbound 名称。", "Enter an outbound name already defined in Sing-box route.")
      : tr("可选择 DIRECT、REJECT，或填写 {client} 中已有的策略组名称。", "Use DIRECT, REJECT, or an existing policy group in {client}.", { client: clientName(selectedResource) });
}

async function copyResource(id, button, mode = "link") {
  const resource = resources.find((item) => item.id === id);
  if (!resource) return;
  let content = resource.content;
  const displayName = resourceI18n(resource).name;
  let message = () => tr("{name} · 配置内容已复制", "{name} · Configuration copied", { name: displayName });
  if (resource.sourceUrl) {
    content = resource.sourceUrl;
    message = () => tr("{name} · {kind}链接已复制", "{name} · {kind} link copied", { name: displayName, kind: resource.type === "module" ? tr("安装", "Installation") : tr("上游", "Source") });
  }
  if (hasReference(resource)) {
    if (mode === "reference") {
      if (needsPolicy(resource) && !validPolicy()) return;
      content = ruleReference(resource);
      message = () => tr("{name} · {client} 引用已复制", "{name} · {client} reference copied", { name: displayName, client: clientName(resource) });
    }
  }
  if (mode === "raw") {
    if (selectedRawContent === null) return;
    content = selectedRawContent;
    message = () => tr("{name} · 完整原文已复制", "{name} · Full source copied", { name: displayName });
  }
  button.disabled = true;
  const copied = await writeClipboard(content);
  button.disabled = false;
  updateDialogControls();
  if (copied) toast(message());
  else {
    toast(tr("复制未成功，请在配置详情中选择文字复制", "Copy failed. Select and copy the text in the configuration details."));
    if (!resourceDialog.open) openResource(resource.id);
  }
}

function toggleSaved(id) {
  const resource = resources.find((item) => item.id === id);
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  try {
    localStorage.setItem("surge-space-saved", JSON.stringify([...saved]));
  } catch {
    /* Keep this session's collection. */
  }
  renderResources();
  const focusTarget = [...resourceGrid.querySelectorAll("[data-save]")].find(
    (button) => button.dataset.save === id,
  );
  if (focusTarget) focusTarget.focus({ preventScroll: true });
  toast(
    saved.has(id)
      ? tr("已收藏 {name}", "Saved {name}", { name: resourceI18n(resource).name })
      : tr("已取消收藏 {name}", "Unsaved {name}", { name: resourceI18n(resource).name }),
  );
}

async function fetchResourceContent(resource) {
  return resourceContentLoader.read(resource);
}

function prefetchResourceContent(resource, opened = false) {
  if (!resource?.sourceUrl || resource.type === "rule" ||
      pendingContentPrefetches.has(resource.sourceUrl)) return;
  if (!opened && (document.hidden || navigator.connection?.saveData ||
      pendingContentPrefetches.size >= 2)) return;
  pendingContentPrefetches.add(resource.sourceUrl);
  void fetchResourceContent(resource).catch(() => {
    // Intent prefetching is optional; the content tab retains its normal retry.
  }).finally(() => pendingContentPrefetches.delete(resource.sourceUrl));
}

function cancelContentPrefetch() {
  clearTimeout(contentPrefetchTimer);
  contentPrefetchTarget = null;
}

function scheduleContentPrefetch(event) {
  const button = event.target.closest(".resource-card [data-preview]");
  if (!button || button === contentPrefetchTarget) return;
  cancelContentPrefetch();
  contentPrefetchTarget = button;
  contentPrefetchTimer = setTimeout(() => {
    if (button.isConnected) {
      prefetchResourceContent(resources.find((item) => item.id === button.dataset.preview));
    }
  }, 120);
}

function updateRawPreviewLabels() {
  const status = document.getElementById("raw-status");
  if (selectedRawContent !== null) {
    const truncated = selectedRawContent.split(/\r?\n/, 201).length > 200;
    status.textContent =
      (rawContentSources.get(selectedResource?.sourceUrl) === "snapshot"
        ? tr("上游暂不可用 · 显示已收录快照 · ", "Source unavailable · Bundled snapshot · ") : "") +
      (truncated
        ? tr("预览前 200 行 · 复制和下载包含完整内容", "First 200 lines · Copy and download include the full source")
        : tr("完整原始内容", "Complete original source"));
  } else if (rawPreviewError) {
    status.textContent = tr("上游文件暂时无法加载", "The source file is currently unavailable");
    document.getElementById("dialog-raw-code").textContent = tr("请重试，或通过上方的「原始链接」打开上游文件。", "Try again or open the file using the Original link above.");
  } else {
    status.textContent = tr("正在读取完整配置…", "Loading the full configuration…");
  }
}

async function loadRawPreview(resource) {
  const request = ++rawPreviewRequest;
  const status = document.getElementById("raw-status");
  const rawCode = document.getElementById("dialog-raw-code");
  selectedRawContent = null;
  rawPreviewError = false;
  updateRawPreviewLabels();
  rawCode.textContent = "";
  document.getElementById("raw-retry").hidden = true;
  updateDialogControls();
  try {
    const content = await fetchResourceContent(resource);
    if (request !== rawPreviewRequest || selectedResource?.id !== resource.id || !resourceDialog.open) return;
    selectedRawContent = content;
    const lines = content.split(/\r?\n/, 201);
    rawCode.textContent = lines.slice(0, 200).join("\n");
    updateRawPreviewLabels();
  } catch {
    if (request !== rawPreviewRequest || selectedResource?.id !== resource.id || !resourceDialog.open) return;
    rawPreviewError = true;
    updateRawPreviewLabels();
    document.getElementById("raw-retry").hidden = false;
  }
  if (request === rawPreviewRequest && selectedResource?.id === resource.id) updateDialogControls();
}

function setDetailTab(tab, reloadRaw = true) {
  selectedDetailTab = tab;
  resourceDialog.querySelectorAll("[data-detail-tab]").forEach((button) => {
    const active = button.dataset.detailTab === tab;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.getElementById("detail-code-panel").hidden = tab !== "code";
  document.getElementById("detail-raw-panel").hidden = tab !== "raw";
  document.getElementById("detail-instructions-panel").hidden =
    tab !== "instructions";
  document.getElementById("policy-field").hidden =
    tab !== "code" || !needsPolicy(selectedResource);
  if (tab === "raw" && reloadRaw) loadRawPreview(selectedResource);
  updateDialogControls();
}

function englishResourceInstructions(resource, view) {
  if (resourceClient(resource) === "mihomo") {
    return `<h3>Use remote rule sets in Mihomo</h3>
      <p>Enter an existing policy or group, then copy the YAML from Reference config.
      Merge the <code>rule-providers</code> entry into your existing provider mapping and the
      <code>rules</code> entry into the existing list before the final <code>MATCH</code> rule.
      Keep each top-level field once; a rule fragment should not replace your full configuration or subscription.</p>
      <p>These files use <code>behavior: classical</code> and <code>format: yaml</code>.
      Mihomo periodically updates them from the original URL. Use distinct provider names and cache paths when adding several rule sets.</p>
      <p>Rule source shows the original YAML <code>payload</code>. Large files show the first 200 lines;
      source copying and downloads include the complete file. Rule sets contain no nodes or policy groups.</p>
      <p class="source-line"><a href="${escapeHtml(MIHOMO_UPSTREAM.readmeUrl)}" target="_blank" rel="noopener noreferrer">Repository instructions ↗</a> ·
      <a href="${escapeHtml(MIHOMO_UPSTREAM.docsUrl)}" target="_blank" rel="noopener noreferrer">Mihomo rule provider documentation ↗</a></p>`;
  }
  if (resourceClient(resource) === "egern") {
    const instructions = view.instructions || (resource.type === "rule"
      ? "Add the remote URL as an Egern rule_set, select an existing policy, and place it before the final default rule."
      : resource.type === "widget"
        ? "Add the YAML in Egern Tools → Modules. Configure its parameters, then open Analytics → Widget Gallery and choose the widget on your Home Screen."
        : "Add the resource URL in Egern Tools → Modules. Read the author's setup and parameter instructions before importing.");
    return `<h3>Use this ${resource.type === "rule" ? "rule set" : resource.type === "widget" ? "widget" : "module"} in Egern</h3>
      ${String(instructions).split(/\n\s*\n/).map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll("\n", "<br>")}</p>`).join("")}
      <p class="source-line"><a href="${escapeHtml(resource.repositoryUrl || EGERN_SOURCE.repoUrl)}" target="_blank" rel="noopener noreferrer">Original source ↗</a> ·
      <a href="${escapeHtml(EGERN_SOURCE.docsUrl)}" target="_blank" rel="noopener noreferrer">Egern documentation ↗</a></p>`;
  }
  if (resource.type === "rule" && additionalProxyClientIds.includes(resourceClient(resource))) {
    const clientId = resourceClient(resource);
    const upstreamClient = PROXY_RULE_UPSTREAMS[clientId].client;
    return `<h3>Use this remote rule set in ${escapeHtml(clientName(resource))}</h3>
      <p>${escapeHtml(view.instructions || "Merge the generated reference into your current client configuration and use an existing policy.")}</p>
      <p>The source link points to the original ${escapeHtml(upstreamClient)} rule file. The preview shows its native format; copying or downloading includes the complete file.</p>
      <p class="source-line"><a href="${escapeHtml(`${UPSTREAM.repoUrl}/blob/main/rules/${upstreamClient}/README.md`)}" target="_blank" rel="noopener noreferrer">Repository instructions ↗</a></p>`;
  }
  if (resource.type === "rule") {
    return `<h3>Receive updates with a remote rule set</h3>
      <p>Enter an existing policy or group in Reference config. Copy the <code>RULE-SET</code> line
      into the <code>[Rule]</code> section of your current Surge configuration before <code>FINAL</code>.
      Surge uses the first matching rule and retrieves the rule set from its original URL.</p>
      <p>Rule source preserves the original file. Large files preview the first 200 lines; copying and downloads
      include the full file. Downloaded <code>.list</code> files do not include a policy; specify one when referencing them.</p>
      <p>Supported rule types depend on your Surge version. Rules using <code>URL-REGEX</code> or
      <code>USER-AGENT</code> may require HTTP and MITM configuration.</p>
      <p class="source-line"><a href="${escapeHtml(UPSTREAM.readmeUrl)}" target="_blank" rel="noopener noreferrer">Upstream instructions ↗</a> ·
      <a href="https://manual.nssurge.com/rules/ruleset.html" target="_blank" rel="noopener noreferrer">Surge rule set documentation ↗</a></p>`;
  }
  return resource.sourceUrl
    ? `<h3>Import a module into Surge</h3>
      <p>On a device with Surge installed, choose Import to Surge or paste the module URL into Surge's module installer.
      Module source previews the configuration; Download .sgmodule saves the complete file.</p>
      <p>Modules can include scripts, MITM settings and parameters. Follow the original author's repository instructions.</p>
      <p class="source-line">Catalog: <a href="${escapeHtml(resource.originPageUrl)}" target="_blank" rel="noopener noreferrer">Surge Modules ↗</a> ·
      Author: <a href="${escapeHtml(resource.repositoryUrl || resource.originPageUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.author)} ↗</a></p>`
    : `<h3>Install an example module from a file</h3>
      <p>On a device with Surge installed, use the card's Import button or Import to Surge in these details.
      You can also choose Download .sgmodule, transfer the file to your Surge device, then open and install it in Surge.
      You can also copy the complete configuration and save it as a plain-text <code>.sgmodule</code> file.</p>
      <p>This is a local example. Adjust it to suit your network.</p>
      <p class="source-line"><a href="https://manual.nssurge.com/profile/module.html" target="_blank" rel="noopener noreferrer">Surge module documentation ↗</a></p>`;
}

function openResource(id, preserveState = false) {
  selectedResource = resources.find((resource) => resource.id === id);
  if (!selectedResource) return;
  const resource = selectedResource;
  const view = resourceI18n(resource);
  const isRule = resource.type === "rule";
  const egern = resourceClient(resource) === "egern";
  const mihomo = resourceClient(resource) === "mihomo";
  const additionalProxyClient = additionalProxyClientIds.includes(resourceClient(resource));
  const reference = hasReference(resource);
  if (!preserveState) {
    ++rawPreviewRequest;
    cancelContentPrefetch();
    selectedRawContent = null;
    rawPreviewError = false;
    policyInput.value = "";
  }
  policyInput.placeholder = resourceClient(resource) === "singbox"
    ? tr("填写现有 outbound 名称", "Enter an existing outbound")
    : tr("填写 {client} 中已有的策略组名称", "Enter an existing {client} policy group", { client: clientName(resource) });
  document.getElementById("dialog-title").textContent = view.name;
  document.getElementById("dialog-description").textContent =
    view.description;
  const typeLabel = document.getElementById("dialog-type");
  typeLabel.className = `type-label ${resource.type}`;
  typeLabel.textContent = `${clientName(resource).toUpperCase()} · ${typeName(resource)}`;
  const resourceIcon = document.getElementById("dialog-icon");
  const brand = getResourceBrand(resource);
  resourceIcon.classList.toggle("has-brand-icon", Boolean(brand));
  resourceIcon.classList.toggle("has-thumbnail", Boolean(resource.thumbnailUrl));
  resourceIcon.style.setProperty("--icon-bg", resource.background);
  resourceIcon.style.setProperty("--icon-color", resource.color);
  resourceIcon.innerHTML = resourceIconMarkup(resource, brand);
  document.getElementById("dialog-tags").innerHTML = view.tags
    .map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`)
    .join("");
  document.getElementById("dialog-source").hidden = !resource.sourceUrl && !resource.repositoryUrl;
  if (resource.sourceUrl || resource.repositoryUrl) {
    document.getElementById("dialog-updated").textContent =
      [resource.author || resource.sourceName || (egern ? "Egern" : isRule ? "MultiClientProxyCore" : "Surge Modules"), resource.version, resource.updatedAt?.slice(0, 10)].filter(Boolean).join(" · ");
    document.getElementById("dialog-upstream-file").href =
      resource.repositoryUrl || resource.originPageUrl || resource.sourceUrl;
    const rawLink = document.getElementById("dialog-raw-link");
    rawLink.hidden = !resource.sourceUrl;
    if (resource.sourceUrl) rawLink.href = resource.sourceUrl;
    // 本站镜像（仅置顶规则有，字段来自 upstream.js 的 mirrorUrl）：
    // 原文链接仍是主链接，镜像只作上游失效时的备用入口。
    let mirrorLink = document.getElementById("dialog-mirror-link");
    if (!mirrorLink) {
      mirrorLink = document.createElement("a");
      mirrorLink.id = "dialog-mirror-link";
      mirrorLink.target = "_blank";
      mirrorLink.rel = "noopener noreferrer";
      rawLink.after(mirrorLink);
    }
    mirrorLink.hidden = !resource.mirrorUrl;
    if (resource.mirrorUrl) {
      mirrorLink.href = resource.mirrorUrl;
      mirrorLink.textContent = `${tr("本站镜像", "Local mirror")} ↗`;
    }
  }
  document.querySelector('[data-detail-tab="raw"]').hidden =
    !resource.sourceUrl;
  document.querySelector('[data-detail-tab="raw"]').textContent = isRule
    ? tr("原始规则", "Rule source")
    : resource.type === "widget" ? tr("组件内容", "Widget source") : tr("模块内容", "Module source");
  document.querySelector('[data-detail-tab="code"]').textContent = reference
    ? tr("引用配置", "Reference config")
    : resource.sourceUrl
      ? tr("资源链接", "Resource link")
      : tr("配置内容", "Configuration");
  document.getElementById("dialog-filename").textContent = reference
    ? `${clientName(resource)} / ${mihomo ? "rule-providers + rules" : egern ? "rules" : resource.referenceFormatLabel || "[Rule]"} · ${tr("远程规则集", "Remote rule set")}`
    : resource.filename;
  document.getElementById("dialog-code").textContent = reference
    ? ruleReference(resource)
    : resource.sourceUrl || resource.content;
  if (!preserveState) document.getElementById("download-resource").disabled = false;
  document.getElementById("download-resource").innerHTML =
    `${icon("download")} ${tr("下载", "Download")} ${escapeHtml(resourceExtension(resource))}`;
  document.getElementById("code-copy").innerHTML = `${icon("copy")} ${tr("复制", "Copy")}`;
  document.getElementById("dialog-notice-text").textContent = mihomo
    ? tr("适用于 Mihomo 内核 · classical YAML 规则集。请合并到当前配置，策略组名称须已存在。", "For the Mihomo core · classical YAML rule set. Merge into your current configuration and use an existing policy group.")
    : egern
    ? isRule
      ? tr("填写 Egern 中已有的策略，复制 YAML 引用并合并到当前配置的 rules 列表。", "Enter an existing Egern policy, then copy the YAML reference and merge it into your configuration's rules list.")
      : `Egern · ${resource.sourceUrl ? tr("使用前请阅读作者说明，模块可能需要设置参数。", "Read the author's instructions before use; modules may require parameters.") : tr("本地 YAML 配置示例，请按说明合并配置。", "Local YAML example. Follow the instructions to merge it into your configuration.")}`
    : additionalProxyClient && isRule
      ? tr("{client} 原生规则集 · 引用指向原始规则文件。请将配置片段合并到当前客户端设置。", "Native {client} rule set · The reference points to the original rule file. Merge the snippet into your current client configuration.", { client: clientName(resource) })
    : isRule
    ? tr("引用直接指向上游。策略或策略组名称需与 Surge 当前配置一致。", "References point to the original source. Use a policy or group that exists in your current Surge configuration.")
    : resource.sourceUrl
      ? tr("模块来自 Surge Modules，版权归原作者。", "Cataloged by Surge Modules. Rights belong to the original author.") + (resource.health === "unknown" ? tr("来源站尚未检测此模块的可用状态。", "The source catalog has not checked this module's availability.") : "")
      : tr("此模块为本地配置示例，可按你的网络需求调整。", "This is a local example. Adjust it to suit your network.");
  const installLink = document.getElementById("install-resource");
  const installUrl = resourceInstallUrl(resource);
  installLink.hidden = !installUrl;
  installLink.innerHTML = `${tr("导入 {client}", "Import to {client}", { client: clientName(resource) })} ${icon("arrow-up-right")}`;
  if (!installLink.hidden) installLink.href = installUrl;
  else installLink.removeAttribute("href");
  document.getElementById("detail-instructions-panel").innerHTML = mihomo
    ? `<h3>在 Mihomo 中使用远程规则集</h3>
      <p>填写已有策略或策略组，复制「引用配置」中的 YAML。
      将 <code>rule-providers</code> 条目合并到当前配置的同名映射，
      将 <code>rules</code> 条目合并到已有列表，并放在 <code>MATCH</code> 兜底规则之前。
      每个顶层字段只保留一个；引用单个规则集不需要覆盖整份配置或订阅。</p>
      <p>仓库文件采用 <code>behavior: classical</code>、<code>format: yaml</code>，
      Mihomo 会通过原始地址定期更新。复制多份引用时，每个 provider 使用不同名称与缓存路径。</p>
      <p>「原始规则」显示上游的 <code>payload</code> 内容，大型文件预览前 200 行；
      复制原文和下载使用完整 YAML。规则文件本身不包含节点或策略组。</p>
      <p class="source-line"><a href="${escapeHtml(MIHOMO_UPSTREAM.readmeUrl)}" target="_blank" rel="noopener noreferrer">仓库使用说明 ↗</a> ·
      <a href="https://wiki.metacubex.one/config/rule-providers/" target="_blank" rel="noopener noreferrer">Mihomo 规则集文档 ↗</a></p>`
    : egern
    ? `<h3>在 Egern 中使用${typeName(resource)}</h3>
      ${String(resource.instructions || (isRule
        ? "在 Egern 远程规则集入口添加上方资源链接，并选择已有策略。规则应置于最终匹配规则之前。"
        : resource.type === "widget"
          ? "先将 YAML 文件添加到 Egern 的工具 → 模块；在分析 → 小组件画廊查看，再在主屏添加 Egern 小组件并选择对应名称。"
          : "在 Egern 的工具 → 模块中添加资源链接；导入前请阅读原作者的参数与使用说明。"))
        .split(/\n\s*\n/).map((paragraph) => `<p>${escapeHtml(paragraph).replaceAll("\n", "<br>")}</p>`).join("")}
      <p class="source-line"><a href="${escapeHtml(resource.repositoryUrl || EGERN_SOURCE.repoUrl)}" target="_blank" rel="noopener noreferrer">资源来源 ↗</a> · <a href="${escapeHtml(EGERN_SOURCE.docsUrl)}" target="_blank" rel="noopener noreferrer">Egern 官方文档 ↗</a></p>`
    : additionalProxyClient && isRule
    ? `<h3>在 ${escapeHtml(clientName(resource))} 中使用原生远程规则</h3>
      <p>${escapeHtml(resource.instructions || "将引用合并到现有客户端配置中，并使用已有策略。")}</p>
      <p>「原始规则」保留上游文件格式；大型文件预览前 200 行，复制原文和下载会使用完整文件。</p>
      <p class="source-line"><a href="${escapeHtml(`${UPSTREAM.repoUrl}/blob/main/rules/${PROXY_RULE_UPSTREAMS[resourceClient(resource)].client}/README.md`)}" target="_blank" rel="noopener noreferrer">仓库规则说明 ↗</a> · <a href="${escapeHtml(resource.repositoryUrl)}" target="_blank" rel="noopener noreferrer">上游规则文件 ↗</a></p>`
    : isRule
    ? `<h3>通过远程规则集使用上游更新</h3>
      <p>在「引用配置」中填写已有策略或策略组，复制 <code>RULE-SET</code> 引用，
      粘贴到 Surge 当前配置的 <code>[Rule]</code> 区域，并放在 <code>FINAL</code> 规则之前。
      Surge 会按规则顺序首次匹配，并通过引用地址获取上游内容。</p>
      <p>「原始规则」保留上游文件内容。大型文件预览前 200 行，复制原文和下载会使用完整文件。
      下载的 <code>.list</code> 不含策略，作为规则集使用时需另外指定策略。</p>
      <p>规则类型及平台支持范围以 Surge 当前版本为准。包含 <code>URL-REGEX</code>、
      <code>USER-AGENT</code> 的规则应结合 HTTP 与 MITM 配置使用。</p>
      <p class="source-line">来源
      <a href="${UPSTREAM.readmeUrl}" target="_blank" rel="noopener noreferrer">上游说明 ↗</a> ·
      <a href="https://manual.nssurge.com/rules/ruleset.html" target="_blank" rel="noopener noreferrer">Surge 规则集文档 ↗</a></p>`
    : resource.sourceUrl
      ? `<h3>导入模块到 Surge</h3>
      <p>在已安装 Surge 的设备上点击「导入 Surge」，或复制安装链接，粘贴到 Surge 的模块安装入口。
      「模块内容」可以预览配置，「下载 .sgmodule」会下载完整模块文件。</p>
      <p>模块可能包含脚本、MITM 与参数设置，具体配置要求请参阅原作者的仓库说明。</p>
      <p class="source-line">索引来源
      <a href="${escapeHtml(resource.originPageUrl)}" target="_blank" rel="noopener noreferrer">Surge Modules ↗</a> ·
      作者 <a href="${escapeHtml(resource.repositoryUrl || resource.originPageUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(resource.author)} ↗</a></p>`
      : `<h3>通过文件安装示例模块</h3>
      <p>在已安装 Surge 的设备上，可点击卡片的「一键导入」或详情中的「导入 Surge」。
      也可点击「下载 .sgmodule」，把文件传输到运行 Surge 的设备，在 Surge 中打开并安装。
      也可以复制完整内容，使用纯文本编辑器保存为 <code>.sgmodule</code> 后导入。</p>
      <p>这是本地示例模块，可按你的网络环境修改配置。</p>
      <p class="source-line">格式参考
      <a href="https://manual.nssurge.com/profile/module.html" target="_blank" rel="noopener noreferrer">Surge 模块文档 ↗</a></p>`;
  if (siteI18n.locale === "en") {
    document.getElementById("detail-instructions-panel").innerHTML = englishResourceInstructions(resource, view);
  }
  setDetailTab(preserveState ? selectedDetailTab : "code", !preserveState);
  if (preserveState) updateRawPreviewLabels();
  if (!resourceDialog.open) {
    resourceDialog.showModal();
    siteMotion.revealDialog(resourceDialog);
  }
  if (!preserveState) prefetchResourceContent(resource, true);
}

async function downloadResource() {
  const resource = selectedResource;
  const button = document.getElementById("download-resource");
  button.disabled = true;
  try {
    const content = resource.sourceUrl
      ? await fetchResourceContent(resource)
      : resource.content;
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = resource.filename;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast(tr("已开始下载 {filename}", "Downloading {filename}", { filename: resource.filename }) + (rawContentSources.get(resource.sourceUrl) === "snapshot" ? tr("（本地快照）", " (bundled snapshot)") : ""));
  } catch {
    toast(tr("下载失败，请重试或打开原始链接", "Download failed. Try again or open the original link."));
  } finally {
    button.disabled = false;
  }
}

function updateThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  document.querySelector('meta[name="theme-color"]').content = dark
    ? "#000000"
    : "#efedf5";
  const button = document.getElementById("theme-toggle");
  button.innerHTML = icon(dark ? "moon" : "sun");
  button.setAttribute("aria-label", dark ? tr("切换到浅色模式", "Switch to light mode") : tr("切换到深色模式", "Switch to dark mode"));
}

resourceGrid.addEventListener("pointerover", scheduleContentPrefetch);
resourceGrid.addEventListener("focusin", scheduleContentPrefetch);
resourceGrid.addEventListener("pointerout", (event) => {
  if (contentPrefetchTarget && !contentPrefetchTarget.contains(event.relatedTarget))
    cancelContentPrefetch();
});
resourceGrid.addEventListener("focusout", cancelContentPrefetch);
resourceGrid.addEventListener("pointerdown", (event) => {
  const button = event.target.closest(".resource-card [data-preview]");
  if (button) prefetchResourceContent(resources.find((item) => item.id === button.dataset.preview));
}, { passive: true });

document.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) toggleSaved(saveButton.dataset.save);
  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) copyResource(copyButton.dataset.copy, copyButton);
  const previewButton = event.target.closest("[data-preview]");
  if (previewButton) openResource(previewButton.dataset.preview);
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    Object.assign(state, {
      category: categoryButton.dataset.category,
      savedOnly: false,
      page: 1,
    });
    renderResources();
  }
  const typeButton = event.target.closest("[data-type]");
  if (typeButton && supportsResourceType(typeButton.dataset.type)) {
    state.type = typeButton.dataset.type;
    state.page = 1;
    renderResources();
  }
  const clientButton = event.target.closest("[data-client]");
  if (clientButton) {
    state.client = clientButton.dataset.client;
    resetFilters();
  }
  const navButton = event.target.closest("[data-nav]");
  if (navButton && (navButton.dataset.nav === "saved" || supportsResourceType(navButton.dataset.nav))) {
    resetFilters();
    if (navButton.dataset.nav === "saved") state.savedOnly = true;
    else state.type = navButton.dataset.nav;
    renderResources();
    siteMotion.scrollTo(document.getElementById("explore"));
  }
  if (event.target.closest("[data-guide]")) {
    guideDialog.showModal();
    siteMotion.revealDialog(guideDialog);
  }
  const closeButton = event.target.closest(".dialog-close");
  if (closeButton) closeButton.closest("dialog").close();
  const detailTab = event.target.closest("[data-detail-tab]");
  if (detailTab) setDetailTab(detailTab.dataset.detailTab);
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  state.page = 1;
  renderResources();
});
document.getElementById("sort-select").addEventListener("change", (event) => {
  state.sort = event.target.value;
  state.page = 1;
  renderResources();
});
document.getElementById("saved-filter").addEventListener("click", () => {
  state.savedOnly = !state.savedOnly;
  state.category = "all";
  state.page = 1;
  renderResources();
});
document
  .getElementById("clear-filters")
  .addEventListener("click", resetFilters);
document.getElementById("empty-reset").addEventListener("click", resetFilters);
document
  .getElementById("refresh-upstream")
  .addEventListener("click", loadCatalog);

document
  .getElementById("refresh-egern-upstream")
  .addEventListener("click", loadEgernCatalog);
document
  .getElementById("refresh-mihomo-upstream")
  .addEventListener("click", loadMihomoCatalog);

document
  .getElementById("refresh-egern-hub")
  .addEventListener("click", loadEgernHub);

document
  .getElementById("refresh-modules")
  .addEventListener("click", loadModules);
document
  .getElementById("raw-retry")
  .addEventListener("click", () => loadRawPreview(selectedResource));
policyInput.addEventListener("input", updateDialogControls);

document.getElementById("dialog-copy").addEventListener("click", (event) => {
  copyResource(
    selectedResource.id,
    event.currentTarget,
    selectedDetailTab === "raw" ? "raw" : "reference",
  );
});
document
  .getElementById("code-copy")
  .addEventListener("click", (event) =>
    copyResource(selectedResource.id, event.currentTarget, "reference"),
  );
document
  .getElementById("download-resource")
  .addEventListener("click", downloadResource);

for (const [id, step] of [
  ["previous-page", -1],
  ["next-page", 1],
]) {
  document.getElementById(id).addEventListener("click", () => {
    state.page += step;
    renderResources();
    siteMotion.scrollTo(document.querySelector(".resource-toolbar"));
  });
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  const theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("surge-space-theme", theme);
  } catch {
    /* Keep the current theme in memory. */
  }
  updateThemeButton();
});


document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
});

document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
  tablist.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const tabs = [...tablist.querySelectorAll('[role="tab"]')].filter(
      (tab) => !tab.hidden,
    );
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    const nextIndex =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? tabs.length - 1
          : (index + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) %
            tabs.length;
    tabs[nextIndex].focus();
    tabs[nextIndex].click();
  });
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    if (resourceDialog.open || guideDialog.open) return;
    event.preventDefault();
    searchInput.focus();
    siteMotion.scrollTo(document.getElementById("explore"));
  }
});

document.getElementById("shortcut-key").textContent = /Mac|iPhone|iPad/.test(
  navigator.platform,
)
  ? "⌘"
  : "Ctrl";
window.addEventListener("site-language-change", () => {
  cancelContentPrefetch();
  renderIcons();
  renderResources();
  updateThemeButton();
  if (resourceDialog.open && selectedResource) openResource(selectedResource.id, true);
  // A short-lived notification should not remain in the previous language.
  clearTimeout(toastTimer);
  document.getElementById("toast").classList.remove("show");
});
renderIcons();
rebuildResources();
updateThemeButton();
siteMotion.observe();

// Show bundled catalogs without waiting for remote timeouts. Each source remains
// independent, and a late local response must never replace a live catalog.
async function primeBundledCatalogs() {
  let renderQueued = false;
  const showCatalog = () => {
    if (renderQueued) return;
    renderQueued = true;
    requestAnimationFrame(() => {
      renderQueued = false;
      rebuildResources();
    });
  };
  const canSeed = (mode) => mode !== "live" && mode !== "snapshot";
  return Promise.allSettled([
    async () => {
      const index = await fetchSurgeIndex("data/surge-index.json");
      if (!canSeed(catalogMode)) return;
      ruleResources = createRuleResources(index);
      catalogMode = "snapshot";
      showCatalog();
    },
    async () => {
      const index = await fetchEgernIndex("data/egern-index.json");
      if (!canSeed(egernCatalogMode)) return;
      egernRuleResources = createEgernRuleResources(index);
      egernCatalogMode = "snapshot";
      showCatalog();
    },
    async () => {
      const index = await fetchMihomoIndex("data/mihomo-index.json");
      if (!canSeed(mihomoCatalogMode)) return;
      mihomoRuleResources = createMihomoRuleResources(index);
      mihomoCatalogMode = "snapshot";
      showCatalog();
    },
    ...additionalProxyClientIds.map((clientId) => async () => {
      const index = await fetchProxyRuleIndex(clientId, `data/${clientId}-index.json`);
      if (!canSeed(additionalCatalogModes[clientId])) return;
      additionalRuleResources[clientId] = createProxyRuleResources(index, clientId);
      additionalCatalogModes[clientId] = "snapshot";
      showCatalog();
    }),
    async () => {
      const modules = await fetchModuleResources("data/modules-source.json");
      if (!canSeed(moduleCatalogMode)) return;
      importedModules = modules;
      moduleCatalogMode = "snapshot";
      showCatalog();
    },
    async () => {
      const snapshot = await fetchEgernHubFallback();
      if (!canSeed(egernHubMode)) return;
      egernHubResources = snapshot.resources;
      egernHubUpdatedAt = snapshot.updatedAt;
      egernHubMode = "snapshot";
      showCatalog();
    },
  ].map((seed) => seed()));
}

// Every visit checks for updates in the background. Long-lived tabs refresh
// after 24 hours; sleeping/offline tabs catch up when visible and connected.
const CATALOG_REFRESH_INTERVAL = 24 * 60 * 60 * 1000;
const CATALOG_RETRY_INTERVAL = 15 * 60 * 1000;
const upstreamRefreshSources = [
  loadCatalog,
  loadEgernCatalog,
  loadMihomoCatalog,
  ...additionalProxyClientIds.map((clientId) => () => loadAdditionalProxyCatalog(clientId)),
  loadEgernHub,
  loadModules,
]
  .map((load) => ({ load, nextRefreshAt: 0 }));
let upstreamRefreshInFlight = null;

function refreshUpstreamCatalogs(force = false) {
  if (upstreamRefreshInFlight) return upstreamRefreshInFlight;
  if (!force && (document.hidden || navigator.onLine === false))
    return Promise.resolve([]);
  const due = upstreamRefreshSources.filter(
    (source) => force || Date.now() >= source.nextRefreshAt,
  );
  if (!due.length) return Promise.resolve([]);
  upstreamRefreshInFlight = Promise.allSettled(due.map(async (source) => {
    let live = false;
    try {
      live = await source.load();
      // Content entries expire by age/version; a slower catalog must not evict
      // another catalog's warm preview or its in-flight request.
      if (live) resourceContentLoader.clearExpired();
      return live;
    } finally {
      source.nextRefreshAt = Date.now() +
        (live ? CATALOG_REFRESH_INTERVAL : CATALOG_RETRY_INTERVAL);
    }
  })).finally(() => { upstreamRefreshInFlight = null; });
  return upstreamRefreshInFlight;
}

setInterval(() => { void refreshUpstreamCatalogs(); }, 60 * 1000);
document.addEventListener("visibilitychange", () => { void refreshUpstreamCatalogs(); });
window.addEventListener("online", () => { void refreshUpstreamCatalogs(); });
window.addEventListener("pageshow", () => { void refreshUpstreamCatalogs(); });
const bundledCatalogsReady = primeBundledCatalogs();
void refreshUpstreamCatalogs(true);
