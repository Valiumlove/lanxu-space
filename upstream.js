const UPSTREAM = {
  repoUrl: "https://github.com/Valiumlove/MultiClientProxyCore",
  rawBase:
    "https://raw.githubusercontent.com/Valiumlove/MultiClientProxyCore/main",
  indexUrl:
    "https://raw.githubusercontent.com/Valiumlove/MultiClientProxyCore/main/index/Surge.json",
  readmeUrl:
    "https://github.com/Valiumlove/MultiClientProxyCore/blob/main/README.md",
};

// 第二通道：同一个 GitHub 文件的 jsDelivr 镜像。raw 挂了先切这里，
// 再不行才读本站 data/*.json 快照。jsDelivr 只防"暂时打不开"，
// 防不了"仓库被删"——删库的兜底是 data/mirror 里的置顶规则文件。
const JSDELIVR_BASE =
  "https://cdn.jsdelivr.net/gh/Valiumlove/MultiClientProxyCore@main";
// 与 scripts/sync-upstream.mjs 里的 FEATURED_RULES 保持一致。
const MIRRORED_RULES = new Set([
  "Apple", "GitHub", "YouTube", "OpenAI", "Telegram",
  "Lan", "Netflix", "Spotify", "Microsoft", "Steam",
]);

const EGERN_UPSTREAM = {
  repoUrl: "https://github.com/Valiumlove/MultiClientProxyCore",
  rawBase:
    "https://raw.githubusercontent.com/Valiumlove/MultiClientProxyCore/main",
  indexUrl:
    "https://raw.githubusercontent.com/Valiumlove/MultiClientProxyCore/main/index/Egern.json",
  readmeUrl:
    "https://github.com/Valiumlove/MultiClientProxyCore/blob/main/rules/Egern/README.md",
};

const MIHOMO_UPSTREAM = {
  repoUrl: "https://github.com/Valiumlove/MultiClientProxyCore",
  rawBase:
    "https://raw.githubusercontent.com/Valiumlove/MultiClientProxyCore/main",
  indexUrl:
    "https://raw.githubusercontent.com/Valiumlove/MultiClientProxyCore/main/index/Mihomo.json",
  readmeUrl:
    "https://github.com/Valiumlove/MultiClientProxyCore/blob/main/rules/Mihomo/README.md",
  docsUrl: "https://wiki.metacubex.one/config/rule-providers/",
};

const EGERN_HUB_UPSTREAM = {
  homeUrl: "https://egern.pages.dev/",
};

const moduleExamples = [
  {
    id: "lan-direct",
    name: "局域网直连",
    type: "module",
    category: "network",
    icon: "network",
    description: "本地示例模块，使用 Surge 内置 LAN 规则集配置直连。",
    tags: ["本地示例", "基础网络"],
    background: "#edf3e6",
    color: "#34C759",
    featured: true,
    filename: "lan-direct.sgmodule",
    installSourcePath: "data/surge-examples/lan-direct.sgmodule",
    content:
      "#!name=局域网直连\n#!desc=使用 Surge 内置 LAN 规则集配置直连。\n\n[Rule]\nRULE-SET,LAN,DIRECT",
  },
  {
    id: "system-direct",
    name: "系统服务直连",
    type: "module",
    category: "system",
    icon: "command",
    description: "本地示例模块，为 Surge 内置 SYSTEM 规则集指定直连策略。",
    tags: ["本地示例", "系统服务"],
    background: "#f1eef7",
    color: "#AF52DE",
    filename: "system-direct.sgmodule",
    installSourcePath: "data/surge-examples/system-direct.sgmodule",
    content:
      "#!name=系统服务直连\n#!desc=使用 Surge 内置 SYSTEM 规则集配置直连。\n\n[Rule]\nRULE-SET,SYSTEM,DIRECT",
  },
  {
    id: "apple-direct",
    name: "Apple 直连模块",
    type: "module",
    category: "system",
    icon: "apple",
    description: "本地示例模块，包含 Apple 与 iCloud 常用域名的直连规则。",
    tags: ["本地示例", "Apple"],
    background: "#eff1ed",
    color: "#8E8E93",
    filename: "apple-direct.sgmodule",
    installSourcePath: "data/surge-examples/apple-direct.sgmodule",
    content:
      "#!name=Apple 直连\n#!desc=Apple 与 iCloud 常用域名直连示例。\n\n[Rule]\nDOMAIN-SUFFIX,apple.com,DIRECT\nDOMAIN-SUFFIX,icloud.com,DIRECT\nDOMAIN-SUFFIX,icloud.com.cn,DIRECT\nDOMAIN-SUFFIX,mzstatic.com,DIRECT",
  },
  {
    id: "custom-reject",
    name: "域名屏蔽模块",
    type: "module",
    category: "privacy",
    icon: "lock",
    description: "本地示例模块，替换示例域名后可用于自定义域名屏蔽。",
    tags: ["本地示例", "自定义规则"],
    background: "#f4ede5",
    color: "#FF9500",
    filename: "custom-reject.sgmodule",
    installSourcePath: "data/surge-examples/custom-reject.sgmodule",
    content:
      "#!name=自定义屏蔽示例\n#!desc=示例域名，请替换为需要屏蔽的实际域名。\n\n[Rule]\nDOMAIN,ads.example.com,REJECT\nDOMAIN-SUFFIX,tracking.example.org,REJECT",
  },
];

const categories = [
  { id: "all", name: "全部资源", icon: "grid" },
  { id: "network", name: "基础网络", icon: "globe" },
  { id: "system", name: "系统服务", icon: "command" },
  { id: "development", name: "开发工具", icon: "terminal" },
  { id: "privacy", name: "隐私防护", icon: "shield" },
  { id: "communication", name: "通讯服务", icon: "message" },
  { id: "media", name: "影音媒体", icon: "play-circle" },
  { id: "ai", name: "AI 服务", icon: "sparkles" },
  { id: "games", name: "游戏平台", icon: "box" },
  { id: "purify", name: "应用净化", icon: "sparkles" },
  { id: "unlock", name: "应用解锁", icon: "lock" },
  { id: "translation", name: "字幕翻译", icon: "message" },
  { id: "other", name: "其他资源", icon: "layers" },
];

const ruleCategoryStyles = {
  network: { background: "#edf3e8", color: "#007AFF" },
  system: { background: "#eff1ed", color: "#8E8E93" },
  development: { background: "#edf0f7", color: "#007AFF" },
  privacy: { background: "#f7efe5", color: "#FF9500" },
  communication: { background: "#eaf2f7", color: "#007AFF" },
  media: { background: "#f5eaf0", color: "#FF2D55" },
  ai: { background: "#f1eef7", color: "#AF52DE" },
  games: { background: "#eeeef8", color: "#AF52DE" },
  other: { background: "#f0f0eb", color: "#8E8E93" },
};

const recommendedRuleNames = [
  "Apple",
  "GitHub",
  "Advertising",
  "Privacy",
  "YouTube",
  "OpenAI",
  "Telegram",
  "Lan",
  "Netflix",
  "Spotify",
  "Microsoft",
  "Steam",
];

function validateSurgeIndex(index) {
  if (!index || index.client !== "Surge" || !Array.isArray(index.rules)) {
    throw new Error("Surge 规则索引格式不正确。");
  }
  for (const entry of index.rules) {
    if (
      !entry ||
      typeof entry.name !== "string" ||
      !entry.name.trim() ||
      typeof entry.file !== "string" ||
      !/^rules\/Surge\/[^/]+\.list$/.test(entry.file) ||
      !Number.isInteger(entry.total_line_count) ||
      entry.total_line_count < 0
    ) {
      throw new Error("Surge 规则索引包含无效条目。");
    }
  }
}

async function fetchSurgeIndex(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-cache",
    });
    if (!response.ok)
      throw new Error(`规则索引请求失败（${response.status}）。`);
    const index = await response.json();
    validateSurgeIndex(index);
    return index;
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchCatalog() {
  for (const url of [UPSTREAM.indexUrl, `${JSDELIVR_BASE}/index/Surge.json`]) {
    try {
      return { index: await fetchSurgeIndex(url), mode: "live" };
    } catch { /* 换下一条通道 */ }
  }
  try {
    return {
      index: await fetchSurgeIndex("data/surge-index.json"),
      mode: "snapshot",
    };
  } catch {
    throw new Error("上游索引与本地快照均加载失败，请稍后重试。");
  }
}

function classifyRuleResource(entry) {
  const text = `${entry.name} ${entry.chinese_name || ""}`;
  const groups = [
    ["privacy", /Advertising|Privacy|Tracking|AdGuard|广告|隐私|追踪|拦截/i],
    [
      "ai",
      /OpenAI|Anthropic|ChatGPT|Claude|Gemini|Copilot|人工智能|智能助手|AI[ -]?编程|(?:^|[\s_-])AI(?:$|[\s_-])/i,
    ],
    [
      "games",
      /游戏|电竞|Games|Gaming|Steam|Xbox|PlayStation|Nintendo|Blizzard/i,
    ],
    [
      "communication",
      /通讯|通信|聊天|社交|微博|邮箱|邮件|Telegram|WhatsApp|WeChat|Discord|Slack|Twitter|Facebook|Instagram/i,
    ],
    [
      "media",
      /媒体|影音|视频|影视|直播|音乐|流媒体|电台|电视|新闻|阅读|书籍|Netflix|YouTube|Spotify|Hulu|Disney|Twitch|TikTok|Music|Video/i,
    ],
    [
      "development",
      /开发|编程|代码|开源|软件仓库|镜像|云计算|云服务|GitHub|GitLab|StackOverflow|Docker|Python|JetBrains|Atlassian/i,
    ],
    [
      "network",
      /网络|局域网|运营商|路由|测速|(?:^|[\s_-])(?:Lan|DNS|CDN|VPN|IP)(?:$|[\s_-])/i,
    ],
    [
      "system",
      /Apple|iCloud|Microsoft|Windows|Office|OneDrive|Android|系统|固件|驱动|证书/i,
    ],
  ];
  return groups.find(([, pattern]) => pattern.test(text))?.[0] || "other";
}

function createRuleResources(index) {
  validateSurgeIndex(index);
  const preferredRanks = new Map(
    recommendedRuleNames.map((name, rank) => [name, rank]),
  );
  const commonIcons = new Map([
    ["Apple", "apple"],
    ["GitHub", "github"],
    ["Telegram", "send"],
    ["Microsoft", "window"],
  ]);
  return index.rules
    .map((entry) => {
      const category = classifyRuleResource(entry);
      const categoryInfo = categories.find((item) => item.id === category);
      const encodedPath = entry.file
        .split("/")
        .map(encodeURIComponent)
        .join("/");
      const displayName =
        typeof entry.chinese_name === "string" && entry.chinese_name.trim()
          ? entry.chinese_name.trim()
          : entry.name;
      const ruleTypes = Array.isArray(entry.types)
        ? entry.types.filter((type) => typeof type === "string")
        : [];
      return {
        id: `surge:${entry.name}`,
        name: entry.name,
        type: "rule",
        category,
        icon: commonIcons.get(entry.name) || categoryInfo.icon,
        description: `${displayName}相关的 Surge 规则集。`,
        tags: [
          categoryInfo.name,
          ...ruleTypes.slice(0, 2),
          ...(entry.stale ? ["上游待更新"] : []),
        ],
        ...ruleCategoryStyles[category],
        featured: preferredRanks.has(entry.name),
        filename: entry.file.split("/").pop(),
        sourceUrl: `${UPSTREAM.rawBase}/${encodedPath}`,
        repositoryUrl: `${UPSTREAM.repoUrl}/blob/main/${encodedPath}`,
        // 本站镜像（仅置顶规则有）：上游删库时详情页可改链到这里。
        // 用法见 README"前端还要改的一小处"；没接之前它只是个备用字段，不影响现有逻辑。
        mirrorUrl: MIRRORED_RULES.has(entry.name)
          ? `data/mirror/surge/${entry.file.split("/").pop()}`
          : "",
        lineCount: entry.total_line_count,
        updatedAt:
          typeof entry.rule_updated_at === "string" &&
          Number.isFinite(Date.parse(entry.rule_updated_at))
            ? entry.rule_updated_at
            : null,
        stale: entry.stale === true,
        upstreamName: entry.name,
      };
    })
    .sort((first, second) => {
      const firstRank = preferredRanks.get(first.name) ?? Infinity;
      const secondRank = preferredRanks.get(second.name) ?? Infinity;
      if (firstRank !== secondRank) return firstRank - secondRank;
      return first.name.localeCompare(second.name, "en", {
        numeric: true,
        sensitivity: "base",
      });
    });
}

function validateEgernIndex(index) {
  if (!index || index.client !== "Egern" || !Array.isArray(index.rules)) {
    throw new Error("Egern 规则索引格式不正确。");
  }
  for (const entry of index.rules) {
    if (
      !entry ||
      typeof entry.name !== "string" ||
      !entry.name.trim() ||
      typeof entry.file !== "string" ||
      !/^rules\/Egern\/[^/]+\.yaml$/.test(entry.file) ||
      !Number.isInteger(entry.total_line_count) ||
      entry.total_line_count < 0
    ) {
      throw new Error("Egern 规则索引包含无效条目。");
    }
  }
}

async function fetchEgernIndex(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-cache",
    });
    if (!response.ok)
      throw new Error(`Egern 规则索引请求失败（${response.status}）。`);
    const index = await response.json();
    validateEgernIndex(index);
    return index;
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchEgernCatalog() {
  for (const url of [EGERN_UPSTREAM.indexUrl, `${JSDELIVR_BASE}/index/Egern.json`]) {
    try {
      return { index: await fetchEgernIndex(url), mode: "live" };
    } catch { /* 换下一条通道 */ }
  }
  return { index: await fetchEgernIndex("data/egern-index.json"), mode: "snapshot" };
}

function createEgernRuleResources(index) {
  validateEgernIndex(index);
  const preferredRanks = new Map(
    recommendedRuleNames.map((name, rank) => [name, rank]),
  );
  const commonIcons = new Map([
    ["Apple", "apple"],
    ["GitHub", "github"],
    ["Telegram", "send"],
  ]);

  return index.rules
    .map((entry) => {
      const category = classifyRuleResource(entry);
      const categoryInfo = categories.find((item) => item.id === category);
      const encodedPath = entry.file
        .split("/")
        .map(encodeURIComponent)
        .join("/");
      const displayName =
        typeof entry.chinese_name === "string" && entry.chinese_name.trim()
          ? entry.chinese_name.trim()
          : entry.name;
      const ruleTypes = Array.isArray(entry.types)
        ? entry.types.filter((type) => typeof type === "string")
        : [];
      const sourceUrl = `${EGERN_UPSTREAM.rawBase}/${encodedPath}`;

      return {
        id: `egern:${entry.name}`,
        client: "egern",
        name: entry.name,
        type: "rule",
        category,
        icon: commonIcons.get(entry.name) || categoryInfo.icon,
        description: `${displayName}相关的 Egern 原生规则集。`,
        tags: [displayName, categoryInfo.name, ...ruleTypes.slice(0, 2)],
        ...ruleCategoryStyles[category],
        featured: preferredRanks.has(entry.name),
        filename: entry.file.split("/").pop(),
        sourceUrl,
        repositoryUrl: `${EGERN_UPSTREAM.repoUrl}/blob/main/${encodedPath}`,
        mirrorUrl: MIRRORED_RULES.has(entry.name)
          ? `data/mirror/egern/${entry.file.split("/").pop()}`
          : "",
        lineCount: entry.total_line_count,
        updatedAt:
          typeof entry.rule_updated_at === "string" &&
          Number.isFinite(Date.parse(entry.rule_updated_at))
            ? entry.rule_updated_at
            : null,
        author: "Valiumlove",
        sourceName: "MultiClientProxyCore · Egern",
        upstreamName: entry.name,
        reference: `rules:\n  - rule_set:\n      match: ${JSON.stringify(sourceUrl)}\n      policy: \"{policy}\"\n      update_interval: 86400`,
        instructions: "在 Egern 的规则配置中添加此远程 rule_set，填写你已配置的策略名称，并将规则放在默认兜底规则之前。该仓库每天自动更新；文件链接直接指向仓库中的 Egern 原生 YAML。",
      };
    })
    .sort((first, second) => {
      const firstRank = preferredRanks.get(first.name) ?? Infinity;
      const secondRank = preferredRanks.get(second.name) ?? Infinity;
      if (firstRank !== secondRank) return firstRank - secondRank;
      return first.name.localeCompare(second.name, "en", {
        numeric: true,
        sensitivity: "base",
      });
    });
}

function validateMihomoIndex(index) {
  if (!index || index.client !== "Mihomo" || !Array.isArray(index.rules) || !index.rules.length) {
    throw new Error("Mihomo 规则索引格式不正确。");
  }
  const names = new Set();
  for (const entry of index.rules) {
    if (
      !entry ||
      typeof entry.name !== "string" ||
      !entry.name.trim() ||
      names.has(entry.name) ||
      typeof entry.file !== "string" ||
      !/^rules\/Mihomo\/[^/]+\.yaml$/.test(entry.file) ||
      /[\\\r\n?#]/.test(entry.file) ||
      !Number.isInteger(entry.total_line_count) ||
      entry.total_line_count < 0
    ) {
      throw new Error("Mihomo 规则索引包含无效条目。");
    }
    names.add(entry.name);
  }
}

async function fetchMihomoIndex(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      cache: "no-cache",
      credentials: "omit",
    });
    if (!response.ok)
      throw new Error(`Mihomo 规则索引请求失败（${response.status}）。`);
    const index = await response.json();
    validateMihomoIndex(index);
    return index;
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchMihomoCatalog() {
  for (const url of [MIHOMO_UPSTREAM.indexUrl, `${JSDELIVR_BASE}/index/Mihomo.json`]) {
    try {
      return { index: await fetchMihomoIndex(url), mode: "live" };
    } catch { /* 换下一条通道 */ }
  }
  try {
    return {
      index: await fetchMihomoIndex("data/mihomo-index.json"),
      mode: "snapshot",
    };
  } catch {
    throw new Error("Mihomo 上游索引与本地快照均加载失败，请稍后重试。");
  }
}

function createMihomoReference(resource, policy = "你的策略组") {
  return [
    "rule-providers:",
    `  ${JSON.stringify(resource.providerName)}:`,
    "    type: http",
    "    behavior: classical",
    "    format: yaml",
    `    url: ${JSON.stringify(resource.sourceUrl)}`,
    `    path: ${JSON.stringify(`./ruleset/${resource.providerName}.yaml`)}`,
    "    interval: 86400",
    "",
    "rules:",
    `  - ${JSON.stringify(`RULE-SET,${resource.providerName},${policy}`)}`,
  ].join("\n");
}

function createMihomoRuleResources(index) {
  validateMihomoIndex(index);
  const preferredRanks = new Map(
    recommendedRuleNames.map((name, rank) => [name, rank]),
  );
  const commonIcons = new Map([
    ["Apple", "apple"],
    ["GitHub", "github"],
    ["Telegram", "send"],
    ["Microsoft", "window"],
  ]);
  return index.rules
    .map((entry) => {
      const category = classifyRuleResource(entry);
      const categoryInfo = categories.find((item) => item.id === category);
      const encodedPath = entry.file.split("/").map(encodeURIComponent).join("/");
      const displayName =
        typeof entry.chinese_name === "string" && entry.chinese_name.trim()
          ? entry.chinese_name.trim()
          : entry.name;
      const ruleTypes = Array.isArray(entry.types)
        ? entry.types.filter((type) => typeof type === "string")
        : [];
      const resource = {
        id: `mihomo:${entry.name}`,
        client: "mihomo",
        name: entry.name,
        type: "rule",
        category,
        icon: commonIcons.get(entry.name) || categoryInfo.icon,
        description: `${displayName}相关的 Mihomo 规则集，适用于使用 Mihomo 内核的客户端。`,
        tags: [displayName, categoryInfo.name, ...ruleTypes.slice(0, 2)],
        ...ruleCategoryStyles[category],
        featured: preferredRanks.has(entry.name),
        filename: entry.file.split("/").pop(),
        sourceUrl: `${MIHOMO_UPSTREAM.rawBase}/${encodedPath}`,
        repositoryUrl: `${MIHOMO_UPSTREAM.repoUrl}/blob/main/${encodedPath}`,
        mirrorUrl: MIRRORED_RULES.has(entry.name)
          ? `data/mirror/mihomo/${entry.file.split("/").pop()}`
          : "",
        lineCount: entry.total_line_count,
        updatedAt:
          typeof entry.rule_updated_at === "string" &&
          Number.isFinite(Date.parse(entry.rule_updated_at))
            ? entry.rule_updated_at
            : null,
        author: "Valiumlove",
        sourceName: "MultiClientProxyCore · Mihomo",
        upstreamName: entry.name,
        providerName: `lanxu-${encodeURIComponent(entry.name)}`,
        behavior: "classical",
        format: "yaml",
        instructions: "在使用 Mihomo 内核的客户端中编辑配置或配置覆写，将 rule-providers 下的条目合并到已有规则提供者配置，再把 rules 中对应的 RULE-SET 条目加入已有规则列表，放在 MATCH 兜底规则之前。请填写实际存在的策略组名称，不要重复创建顶层 rule-providers 或 rules 字段。仓库文件为 classical 格式的 YAML 规则集，规则链接直接指向上游；它不是包含节点的完整订阅配置。",
      };
      resource.reference = createMihomoReference(resource, "{policy}");
      return resource;
    })
    .sort((first, second) => {
      const firstRank = preferredRanks.get(first.name) ?? Infinity;
      const secondRank = preferredRanks.get(second.name) ?? Infinity;
      if (firstRank !== secondRank) return firstRank - secondRank;
      return first.name.localeCompare(second.name, "en", {
        numeric: true,
        sensitivity: "base",
      });
    });
}

function validateEgernHubCatalog(catalog) {
  if (!Array.isArray(catalog)) {
    throw new Error("Egern Hub 目录格式不正确。");
  }
  const resources = catalog.filter(
    (entry) =>
      entry?.kind === "modules" ||
      (entry?.kind === "widgets" &&
        ["egern", "derived"].includes(entry.format)),
  );
  if (!resources.length) throw new Error("Egern Hub 目录未找到模块或小组件。");
  for (const entry of resources) {
    if (
      typeof entry.id !== "string" ||
      typeof entry.name !== "string" ||
      typeof entry.file !== "string" ||
      !/^modules\/[^?#]+\.yaml$/.test(entry.file) ||
      entry.file.split("/").includes("..")
    ) {
      throw new Error("Egern Hub 目录包含无效资源。");
    }
  }
  return resources;
}

function mapEgernHubResources(catalog) {
  const entries = validateEgernHubCatalog(catalog);
  const formatLabels = {
    derived: "适配为 Egern",
    surge: "Surge 转换",
    loon: "Loon 转换",
    "telegram-inline": "频道收录",
  };
  return entries.map((entry) => {
    const categoryInput = {
      name: `${entry.category || ""} ${entry.name}`,
      chinese_name: entry.description || "",
    };
    const category = classifyRuleResource(categoryInput);
    const categoryInfo = categories.find((item) => item.id === category);
    const style = ruleCategoryStyles[category] || {
      background: "#e8f3ff",
      color: "#007AFF",
    };
    const encodedFile = entry.file
      .split("/")
      .map(encodeURIComponent)
      .join("/");
    const sourceUrl = new URL(encodedFile, EGERN_HUB_UPSTREAM.homeUrl).href;
    const encodedIcon = typeof entry.icon === "string"
      ? entry.icon.split("/").map(encodeURIComponent).join("/")
      : "";
    const warnings = Array.isArray(entry.warnings)
      ? entry.warnings.filter((warning) => typeof warning === "string" && warning.trim())
      : [];
    const type = entry.kind === "widgets" ? "widget" : "module";
    const tags = [
      entry.category || categoryInfo.name,
      entry.format === "egern"
        ? "Egern 原生"
        : formatLabels[entry.format] || "Egern 适配",
      ...(entry.mitm ? ["需 MITM"] : []),
      ...(warnings.length ? ["配置提醒"] : []),
      ...(entry.license ? [entry.license] : []),
    ];
    return {
      id: `egern-hub:${entry.id}`,
      client: "egern",
      kind: entry.kind,
      format: entry.format,
      name: entry.name,
      type,
      category,
      icon: type === "widget" ? "grid" : categoryInfo.icon,
      thumbnailUrl: encodedIcon
        ? new URL(encodedIcon, EGERN_HUB_UPSTREAM.homeUrl).href
        : "",
      description: entry.description || `${entry.name} 的 Egern YAML ${type === "widget" ? "小组件" : "模块"}。`,
      tags,
      ...style,
      filename: entry.file.split("/").pop(),
      sourceUrl,
      repositoryUrl:
        typeof entry.upstream === "string" && /^https?:\/\//i.test(entry.upstream)
          ? entry.upstream
          : sourceUrl,
      originPageUrl: EGERN_HUB_UPSTREAM.homeUrl,
      upstreamUrl: entry.upstream || "",
      detailUrl: entry.detail_url
        ? new URL(
            entry.detail_url.split("/").map(encodeURIComponent).join("/"),
            EGERN_HUB_UPSTREAM.homeUrl,
          ).href
        : "",
      author: entry.author || entry.source || "Egern Hub",
      sourceName: entry.source_label || entry.source || "Egern Hub",
      updatedAt:
        typeof entry.updated_at === "string" &&
        Number.isFinite(Date.parse(entry.updated_at))
          ? entry.updated_at
          : "",
      version: entry.license || "",
      mitm: entry.mitm === true,
      warnings,
      featured: false,
      installUrl:
        `egern:/modules/new?name=${encodeURIComponent(entry.name)}&url=${encodeURIComponent(sourceUrl)}`,
      instructions: [
        `此 ${type === "widget" ? "小组件" : "模块"} 来自 Egern Hub，文件是可直接添加到 Egern 的 YAML。点击「导入 Egern」或在 Egern「工具 → 模块」粘贴资源链接。`,
        entry.mitm ? "此配置涉及 MITM；启用前请检查配置说明，并按需设置证书与主机名。" : "",
        ...warnings,
        entry.format !== "egern"
          ? "此条目已整理为 Egern YAML；安装链接指向 Egern Hub 提供的 YAML 文件，而非原始脚本。"
          : "",
      ].filter(Boolean).join("\n\n"),
    };
  });
}

async function fetchEgernHubCatalog() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);
  try {
    const home = await fetch(EGERN_HUB_UPSTREAM.homeUrl, {
      signal: controller.signal,
      cache: "no-cache",
      credentials: "omit",
    });
    if (!home.ok) throw new Error(`Egern Hub 首页请求失败（${home.status}）。`);
    const html = await home.text();
    const catalogPath = html.match(/assets\/data\/catalog\.[a-z0-9]+\.json/i)?.[0];
    if (!catalogPath) throw new Error("Egern Hub 页面没有提供目录地址。");
    const catalogUrl = new URL(catalogPath, EGERN_HUB_UPSTREAM.homeUrl);
    const response = await fetch(catalogUrl, {
      signal: controller.signal,
      cache: "default",
      credentials: "omit",
    });
    if (!response.ok) throw new Error(`Egern Hub 目录请求失败（${response.status}）。`);
    const catalog = await response.json();
    return {
      resources: mapEgernHubResources(catalog),
      mode: "live",
      updatedAt: "",
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchEgernHubFallback() {
  const response = await fetch("data/egern-hub-catalog.json", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error(`Egern Hub 本地目录快照不可用（${response.status}）。`);
  }
  const snapshot = await response.json();
  const resources = validateEgernHubCatalog(snapshot.resources);
  return {
    resources: mapEgernHubResources(resources),
    mode: "snapshot",
    updatedAt: typeof snapshot.updated === "string" ? snapshot.updated : "",
  };
}

async function fetchEgernHubCollection() {
  try {
    return await fetchEgernHubCatalog();
  } catch {
    return fetchEgernHubFallback();
  }
}
