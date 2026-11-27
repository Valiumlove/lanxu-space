// Presentation-only translations. Source catalogs, URLs and configuration stay intact.
(() => {
  "use strict";

  const categoryNames = {
    all: ["全部资源", "All resources"],
    network: ["基础网络", "Networking"],
    system: ["系统服务", "System services"],
    development: ["开发工具", "Developer tools"],
    privacy: ["隐私防护", "Privacy"],
    communication: ["通讯服务", "Communication"],
    media: ["影音媒体", "Media"],
    ai: ["AI 服务", "AI services"],
    games: ["游戏平台", "Gaming"],
    purify: ["应用净化", "App cleanup"],
    unlock: ["应用解锁", "App unlocking"],
    translation: ["字幕翻译", "Subtitle translation"],
    other: ["其他资源", "Other resources"],
  };

  const labels = new Map([
    ...Object.values(categoryNames),
    ["本地示例", "Local example"],
    ["自定义规则", "Custom rules"],
    ["上游待更新", "Upstream update pending"],
    ["桌面小组件", "Home screen widgets"],
    ["网络雷达", "Network radar"],
    ["倒数日", "Countdown"],
    ["开源追踪", "Open-source tracking"],
    ["时间管理", "Time tracking"],
    ["自定义", "Customizable"],
    ["原生 YAML", "Native YAML"],
    ["域名分流", "Domain routing"],
    ["即时通信", "Messaging"],
    ["订阅管理", "Subscription management"],
    ["Surge 兼容模块", "Surge-compatible module"],
    ["脚本管理", "Script management"],
    ["规则转换", "Rule conversion"],
    ["Egern 原生", "Native Egern"],
    ["适配为 Egern", "Adapted for Egern"],
    ["Egern 适配", "Adapted for Egern"],
    ["Surge 转换", "Converted from Surge"],
    ["Loon 转换", "Converted from Loon"],
    ["频道收录", "Channel collection"],
    ["需 MITM", "Requires MITM"],
    ["配置提醒", "Setup notes"],
    ["影音字幕", "Media subtitles"],
    ["去广告", "Ad blocking"],
    ["广告拦截", "Ad blocking"],
    ["小组件", "Widget"],
    ["功能模块", "Module"],
    ["规则集", "Rule set"],
    ["暂无模块描述。", "No module description provided."],
    ["Sub-Store 官方项目", "Official Sub-Store project"],
    ["BoxJS 官方项目", "Official BoxJS project"],
    ["Script Hub 官方项目", "Official Script Hub project"],
  ]);

  const curated = {
    "lan-direct": {
      name: "LAN direct connection",
      description: "A local Surge example that routes its built-in LAN rule set directly.",
      instructions: "Use this example as a Surge module. It assigns DIRECT to the built-in LAN rule set in the [Rule] section. Review it alongside your existing configuration before enabling it.",
    },
    "system-direct": {
      name: "System services direct connection",
      description: "A local Surge example that assigns DIRECT to the built-in SYSTEM rule set.",
      instructions: "Use this example as a Surge module. It assigns DIRECT to the built-in SYSTEM rule set in the [Rule] section. Review it alongside your existing configuration before enabling it.",
    },
    "apple-direct": {
      name: "Apple direct connection",
      description: "A local Surge example with direct-routing rules for common Apple and iCloud domains.",
      instructions: "Use this example as a Surge module. It routes the listed Apple and iCloud domains through DIRECT. Review the domains and choose the routing policy that suits your setup.",
    },
    "custom-reject": {
      name: "Domain blocking example",
      description: "A local Surge example for custom domain blocking. Replace the example domains before use.",
      instructions: "Replace ads.example.com and tracking.example.org with the domains you intend to block. Review the DOMAIN and DOMAIN-SUFFIX rules before adding this module to Surge.",
    },
    "egern:widgets-collection": {
      name: "Home screen widget collection",
      description: "Configure Egern widgets for the lunar calendar, countdowns, network radar, fuel prices and server monitoring.",
      instructions: "This remote module includes shared scripts and widget configuration. Select Import into Egern, or paste the source URL in Tools → Modules → +. After installation, open Analytics and the widget gallery in its upper-left corner. Set your city, anniversaries or server parameters in the module Env settings. Add an Egern widget to the iOS Home Screen, then edit it to select the desired widget name.",
    },
    "egern:github-stars-widget": {
      name: "GitHub Stars",
      description: "Track star counts for multiple GitHub repositories on the Home Screen or Lock Screen, with small and large layouts.",
      instructions: "Add this YAML in Egern → Tools → Modules. In the module Env settings, set REPOS to a comma-separated list such as vuejs/core,facebook/react. GITHUB_TOKEN is optional and can help with request limits. Open Analytics → Widget Gallery to view GitHub Stars, then add an Egern widget to the iOS Home Screen and select GitHub Stars. Your token stays in your own Egern configuration; do not enter it on this website.",
    },
    "egern:life-progress-widget": {
      name: "Life progress",
      description: "Display elapsed days and a progress indicator, with a custom birth date, title and gradient colors.",
      instructions: "Add this YAML in Egern → Tools → Modules. Set BIRTH_DATE in YYYY-MM-DD format in the module Env settings. Optional settings are TITLE, LIFE_EXPECTANCY (days), COLOR_1 and COLOR_2. Open Analytics → Widget Gallery, then add an Egern widget to the iOS Home Screen and select the original widget name 人生进度. Progress is calculated from the total number of days you configure.",
    },
    "egern:apple-rule": {
      name: "Apple routing rules",
      description: "Native Egern YAML rules for domains and IP ranges used by Apple services.",
      instructions: "Add a rule_set rule in Egern → Tools → Rules → +. Set Match to the source URL and select an existing policy. You can also merge the YAML reference into the rules list in your main configuration. Apple services may need different routes; choose your policy accordingly and place the rule before the final default rule.",
    },
    "egern:google-rule": {
      name: "Google routing rules",
      description: "Native Egern rules for network requests associated with Google, Gmail and YouTube.",
      instructions: "Add a rule_set rule in Egern → Tools → Rules → +. Paste the source URL into Match and select an existing proxy or policy group. Merge the YAML reference into your existing rules list before the final default rule. Do not create a second top-level rules field.",
    },
    "egern:telegram-rule": {
      name: "Telegram routing rules",
      description: "Choose a separate routing policy for Telegram, related clients and network addresses.",
      instructions: "Add an Egern rule_set rule with the source URL as Match and an existing messaging policy group as Policy. Merge the reference into the existing rules list in your main configuration. Rules are matched from top to bottom, so place this entry before broader rules and the final default rule.",
    },
    "egern:sub-store-module": {
      name: "Sub-Store",
      description: "The Sub-Store project's native Egern module for managing, processing and syncing subscription configurations.",
      instructions: "Add the source URL in Egern → Tools → Modules and enable the module. Follow the Sub-Store documentation to configure script execution and MITM. The module handles requests for sub.store and includes scheduled synchronization. Set up your subscriptions and Gist in Sub-Store before syncing. Your subscription URLs do not need to be submitted to this website. The source is native Egern YAML.",
    },
    "egern:boxjs-module": {
      name: "BoxJS",
      description: "Manage script settings and data in a local web interface using the project's Surge-compatible module.",
      instructions: "This entry uses a Surge-format module supported by Egern's compatible module feature. Add its URL in Tools → Modules, enable it, and follow the BoxJS documentation to configure scripts and certificates. Open http://boxjs.com while Egern's network processing is running. Individual scripts have their own compatibility requirements; check their documentation.",
    },
    "egern:script-hub-module": {
      name: "Script Hub",
      description: "Access rewrite, rule-set and script conversion tools through the project's Surge-compatible module.",
      instructions: "Add this Surge-format module using Egern's compatible module feature. Follow the project README to configure script execution and handling for the script.hub domain, then open https://script.hub. Select the correct output format and review converted configurations; compatibility depends on the individual script.",
    },
  };

  const ruleInstructions = {
    surge: "Enter a policy or policy group that already exists in Surge, then copy the RULE-SET reference into the [Rule] section of your configuration. Place it before the final fallback rule. The reference points directly to the upstream rule file.",
    egern: "Add this remote rule_set to Egern's rules configuration, choose an existing policy, and place it before the final default rule. Merge the YAML entry into your existing rules list. The source URL points directly to the repository's native Egern YAML file.",
    mihomo: "Edit the configuration or configuration override in a client using the Mihomo core. Merge the provider entry into the existing rule-providers section, then add its RULE-SET entry to the existing rules list before the final MATCH rule. Enter a policy group that already exists. Do not duplicate the top-level rule-providers or rules fields. The upstream file uses classical YAML format and contains rules; it is not a complete proxy subscription.",
  };

  const label = (value) => labels.get(value) || value;

  function localizedCategoryName(category, locale = window.siteI18n?.locale) {
    const id = typeof category === "string" ? category : category?.id;
    const originalName = typeof category === "object" && category ? category.name : null;
    const names = categoryNames[id];
    if (locale === "en") return names?.[1] || label(originalName || id || "");
    return originalName || names?.[0] || id || "";
  }

  function resourceI18n(resource, locale = window.siteI18n?.locale) {
    if (!resource || typeof resource !== "object" || locale !== "en") return resource;
    const result = { ...resource };
    const owned = curated[resource.id];
    if (owned) Object.assign(result, owned);

    // These descriptions and instructions are generated by this site. Author-written
    // catalog names, descriptions and warnings below are deliberately retained.
    const generatedRule = resource.type === "rule" && resource.upstreamName &&
      /^(surge|egern|mihomo):/.test(resource.id);
    if (generatedRule) {
      const client = resource.client === "egern" ? "egern"
        : resource.client === "mihomo" ? "mihomo" : "surge";
      result.name = resource.upstreamName;
      result.description = client === "mihomo"
        ? `${resource.upstreamName} rules in classical YAML format for clients using the Mihomo core.`
        : client === "egern"
          ? `Native Egern YAML rules for ${resource.upstreamName}.`
          : `Surge routing rules for ${resource.upstreamName}.`;
      result.instructions = ruleInstructions[client];
    } else if (typeof resource.id === "string" && resource.id.startsWith("egern-hub:")) {
      const type = resource.type === "widget" ? "widget" : "module";
      if (resource.description === `${resource.name} 的 Egern YAML ${type === "widget" ? "小组件" : "模块"}。`) {
        result.description = `${resource.name}, an Egern YAML ${type}.`;
      }
      result.instructions = [
        `This ${type} comes from Egern Hub as a YAML file that can be added to Egern. Select Import into Egern or paste the resource URL in Egern → Tools → Modules.`,
        resource.mitm ? "This configuration uses MITM. Review its documentation and configure certificates and hostnames as required before enabling it." : "",
        ...(Array.isArray(resource.warnings) ? resource.warnings : []),
        resource.format !== "egern"
          ? "This entry has been adapted to Egern YAML. The installation link points to the YAML file provided by Egern Hub."
          : "",
      ].filter(Boolean).join("\n\n");
    }

    result.description = label(result.description);
    if (Array.isArray(resource.tags)) result.tags = resource.tags.map(label);
    if (typeof resource.sourceName === "string") result.sourceName = label(resource.sourceName);
    result.searchText = [
      resource.searchText, resource.name, resource.description,
      ...(Array.isArray(resource.tags) ? resource.tags : []),
      result.name, result.description, ...(result.tags || []),
      localizedCategoryName(resource.category, locale),
    ].filter((value) => typeof value === "string" && value).join(" ");
    return result;
  }

  window.resourceI18n = resourceI18n;
  window.localizedCategoryName = localizedCategoryName;
})();
