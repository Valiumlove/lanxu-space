// Local UI translations. Configuration files and upstream source text stay untouched.
(() => {
  "use strict";

  const STORAGE_KEY = "lanxu-space-language";
  const messages = {
    "page.title": ["Lanxu Space · 让连接更从容", "Lanxu Space · Better connections"],
    "page.description": ["整理 Surge、Egern、Mihomo、Quantumult X、Loon、Shadowrocket、Stash 与 Sing-box 规则及资源。发现、预览、收藏，让每一次连接更从容。", "Explore rules and resources for Surge, Egern, Mihomo, Quantumult X, Loon, Shadowrocket, Stash and Sing-box."],
    "brand.home": ["Lanxu Space 首页", "Lanxu Space home"],
    "header.guide": ["使用指南", "Guide"],
    "header.clients": ["八款客户端", "8 proxy clients"],
    "header.language": ["选择网站语言", "Choose site language"],
    "hero.title": ["让连接世界，<br />变得<span class=\"highlight\">从容一点<span class=\"highlight-dot\">.</span></span>", "Connect your world.<br /><span class=\"highlight\">A little easier<span class=\"highlight-dot\">.</span></span>"],
    "hero.description": ["好用的规则、实用的模块、恰到好处的小组件。<br />为八款代理客户端，整理你的每一种连接。", "Useful rules, thoughtful modules and handy widgets.<br />Resources organized for eight proxy clients."],
    "client.choose": ["选择客户端", "Choose a client"],
    "hero.explore": ["发现好资源", "Explore resources"],
    "hero.how": ["如何使用", "How to use"],
    "hero.open": ["开源可追溯", "Traceable sources"],
    "hero.copy": ["内容可复制", "Ready to copy"],
    "hero.combine": ["自由组合", "Make it yours"],
    "resources.title": ["好资源，刚好合你心意", "Good resources. Just your kind"],
    "resources.subtitle": ["少一点折腾，多一点顺手。", "Less setup. More flow."],
    "resources.sources": ["资源来源", "Resource sources"],
    "resources.types": ["资源类型", "Resource types"],
    "resources.all": ["全部资源", "All resources"],
    "resources.widgets": ["小组件", "Widgets"],
    "resources.rules": ["规则集", "Rule sets"],
    "resources.modules": ["功能模块", "Modules"],
    "resources.search": ["搜索组件、规则、模块…", "Search widgets, rules, modules…"],
    "resources.searchLabel": ["搜索组件、规则、模块", "Search widgets, rules and modules"],
    "resources.categories": ["资源分类", "Resource categories"],
    "resources.browseCategories": ["浏览分类", "Browse categories"],
    "resources.saved": ["我的收藏", "My saved resources"],
    "resources.tipTitle": ["从容配置，轻松上手", "A smooth start"],
    "resources.tipText": ["几步了解你的新资源<br />如何在客户端中使用。", "Get your new resources<br />working in just a few steps."],
    "resources.viewGuide": ["查看使用指南", "View the guide"],
    "resources.clear": ["清除筛选", "Clear filters"],
    "resources.sort": ["资源排序", "Sort resources"],
    "sort.recommended": ["常用优先", "Recommended"],
    "sort.latest": ["最近更新", "Recently updated"],
    "sort.name": ["名称排序", "Name"],
    "sort.type": ["类型排序", "Type"],
    "empty.title": ["还没有找到合适的资源", "No matching resources yet"],
    "empty.reset": ["查看全部资源", "View all resources"],
    "pagination.label": ["资源分页", "Resource pagination"],
    "pagination.previous": ["← 上一页", "← Previous"],
    "pagination.next": ["下一页 →", "Next →"],
    "banner.title": ["你的网络，你来定义。", "Your network. Your way."],
    "banner.text": ["从一条规则开始，打造更合心意的连接体验。", "Start with a rule. Build connections that work for you."],
    "banner.start": ["开始使用", "Get started"],
    "footer.credit": ["内容归各作者所有", "Content belongs to its respective authors"],
    "docs.surge": ["Surge 官方文档", "Surge documentation"],
    "docs.egern": ["Egern 官方文档", "Egern documentation"],
    "docs.mihomo": ["Mihomo 官方文档", "Mihomo documentation"],
    "docs.readSurge": ["阅读 Surge 官方文档", "Read Surge documentation"],
    "detail.close": ["关闭详情", "Close resource details"],
    "detail.repository": ["仓库文件 ↗", "Repository file ↗"],
    "detail.original": ["原始链接 ↗", "Source link ↗"],
    "detail.tabs": ["资源详情", "Resource details"],
    "detail.instructions": ["使用说明", "Instructions"],
    "detail.policy": ["策略或策略组", "Policy or policy group"],
    "detail.copyAria": ["复制配置", "Copy configuration"],
    "detail.copy": ["复制", "Copy"],
    "detail.retry": ["重新加载", "Try again"],
    "detail.download": ["下载文件", "Download file"],
    "guide.close": ["关闭使用指南", "Close the guide"],
    "guide.title": ["几步，把好资源用起来。", "Put good resources to work."],
    "guide.intro": ["先选择你的客户端，再查看对应的资源与使用说明。", "Choose your client, then explore its resources and instructions."],
    "guide.discoverTitle": ["发现与预览", "Discover and preview"],
    "guide.discover": ["选择八款客户端之一，通过分类或搜索找到资源。卡片标明适用客户端，点击「查看配置」确认格式与说明。", "Choose any of the eight clients, then browse categories or search. Each card shows its client; open View config to check the format and instructions."],
    "guide.surgeRulesTitle": ["Surge：使用规则集", "Surge: use rule sets"],
    "guide.surgeRules": ["点击「查看配置」，填写已有策略或策略组，复制 RULE-SET 引用到当前配置的 [Rule] 区域，并放在 FINAL 规则之前。引用直接指向上游，Surge 可继续获取上游更新。卡片上的「复制链接」可复制原始规则集地址。", "Open View config, enter an existing policy or policy group, then copy the RULE-SET reference into your configuration's [Rule] section before FINAL. References point to the original source, allowing Surge to keep receiving updates. Copy link on a card copies the raw rule-set URL."],
    "guide.surgeModulesTitle": ["Surge：安装功能模块", "Surge: install modules"],
    "guide.surgeModules": ["在已安装 Surge 的设备上，点击模块卡片的「一键导入」即可打开 Surge 安装入口；详情中也保留「导入 Surge」。你还可以复制源链接、预览完整内容，或下载 .sgmodule 文件后在 Surge 中打开并安装。", "On a device with Surge installed, select Import on a module card to open Surge's installer. Import to Surge is also available in the details. You can still copy the source URL, preview the full module or download its .sgmodule file and open it in Surge."],
    "guide.egernTitle": ["Egern：小组件、规则与模块", "Egern: widgets, rules and modules"],
    "guide.egern": ["点击 Egern 模块或小组件卡片的「一键导入」，即可打开 Egern 模块添加入口，带入名称和源链接。规则集请在「查看配置」中填写已有策略，复制 YAML 引用并合并到当前配置。小组件安装后仍需按作者说明设置参数，再从 iOS 主屏幕添加 Egern 小组件。", "Choose Import on an Egern module or widget card to open the module add screen with its name and source URL. For rule sets, enter an existing policy in View config, then copy the YAML reference and merge it into your current configuration. After installing a widget, follow the author's parameter instructions and add it to your iOS Home Screen."],
    "guide.mihomoTitle": ["Mihomo：使用 YAML 规则集", "Mihomo: use YAML rule sets"],
    "guide.mihomo": ["选择「Mihomo」浏览仓库规则。打开「查看配置」并填写已有策略组，复制 YAML，把 rule-providers 合并到同名映射，把 rules 条目合并到已有列表并放在 MATCH 之前。保留单个顶层字段，不要用规则片段覆盖完整配置；provider 使用 classical 与 yaml 格式。卡片支持复制源链接、预览和下载原始规则。", "Choose Mihomo to browse the repository's rules. Open Preview, enter an existing policy group and copy the YAML. Merge the provider into your existing rule-providers mapping and add its rules entry to your rules list before MATCH. Keep one of each top-level key; do not replace your full configuration with a rule snippet. Providers use classical behavior and yaml format. Cards also let you copy the source link, preview and download the raw rules."],
    "guide.additionalClientsTitle": ["更多客户端：原生远程规则", "More clients: native remote rules"],
    "guide.additionalClients": ["选择 Quantumult X、Loon、Shadowrocket、Stash 或 Sing-box 后，打开规则卡片中的「查看配置」，复制该客户端对应的远程规则或配置片段，再合并到现有配置。Quantumult X 的「重写」与 Loon 的「插件」分类目前为空；小组件仅适用于 Egern。", "Choose Quantumult X, Loon, Shadowrocket, Stash or Sing-box, then open a rule card's View config and merge the client-specific remote rule or configuration snippet into your existing setup. Quantumult X Rewrites and Loon Plugins are currently empty. Widgets are available only for Egern."],
    "nav.main": ["主导航", "Main navigation"],
    "nav.discover": ["发现", "Explore"],
    "nav.widgets": ["小组件", "Widgets"],
    "nav.rules": ["规则", "Rules"],
    "nav.modules": ["模块", "Modules"],
    "nav.saved": ["收藏", "Saved"],
    "source.refresh": ["刷新目录", "Refresh catalog"],
    "source.refreshModules": ["刷新模块", "Refresh modules"],
    "source.egernHub": ["Egern Hub · 模块与小组件", "Egern Hub · Modules and widgets"],
    "source.instructions": ["规则说明", "Rule-set guide"],
  };

  let locale = "zh-CN";
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === "en") locale = "en";
  } catch {
    // The language switch remains usable when storage is disabled.
  }

  function text(zh, en, params = {}) {
    return String(locale === "en" ? en : zh).replace(/\{([^{}]+)\}/g, (match, key) =>
      Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : match,
    );
  }

  function translated(key) {
    const entry = messages[key];
    return entry ? text(entry[0], entry[1]) : null;
  }

  function apply(root = document) {
    const selector = "[data-i18n],[data-i18n-html],[data-i18n-aria-label],[data-i18n-placeholder],[data-i18n-title],[data-i18n-content]";
    const nodes = [...root.querySelectorAll(selector)];
    if (root.matches?.(selector)) nodes.unshift(root);
    for (const node of nodes) {
      for (const [attribute, target] of [
        ["data-i18n", "textContent"],
        ["data-i18n-html", "innerHTML"],
        ["data-i18n-aria-label", "aria-label"],
        ["data-i18n-placeholder", "placeholder"],
        ["data-i18n-title", "title"],
        ["data-i18n-content", "content"],
      ]) {
        const key = node.getAttribute(attribute);
        if (!key) continue;
        const value = translated(key);
        if (value === null) continue;
        if (target === "textContent" || target === "innerHTML") node[target] = value;
        else node.setAttribute(target, value);
      }
    }
    document.documentElement.lang = locale;
    const control = document.getElementById("language-select");
    if (control) control.value = locale;
  }

  function setLocale(nextLocale) {
    const next = nextLocale === "en" ? "en" : "zh-CN";
    const changed = next !== locale;
    locale = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // A blocked preference store must not prevent an in-page language change.
    }
    apply();
    if (changed) window.dispatchEvent(new CustomEvent("site-language-change", { detail: { locale } }));
  }

  window.siteI18n = Object.freeze({ get locale() { return locale; }, text, apply, setLocale });
  apply();
  document.getElementById("language-select")?.addEventListener("change", (event) => setLocale(event.target.value));
})();
