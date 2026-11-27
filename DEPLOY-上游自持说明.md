# Lanxu Space 上游自持 · 部署包

2026-11-28 组装，全部代码基于当天 live 站（compact-home-1）实测改好、验证过。
作用：上游仓库挂了/删了，你的站目录照常打开，置顶规则还有本站镜像可下。

## 部署（四步）

1. 把本包文件**按相对路径整包覆盖**进网站仓库根目录：
   - `upstream.js`、`app.js`、`index.html` → 仓库根目录
   - `scripts/sync-upstream.mjs` → `scripts/`
   - `.github/workflows/sync-upstream.yml` → `.github/workflows/`
   - `data/` 整个目录 → 仓库根目录（里面是已生成好的快照和镜像，可直接用）
2. 提交并推送（`git add -A && git commit -m "上游自持" && git push`）。
   Cloudflare Pages 会自动重新部署。
3. 去 GitHub 仓库的 **Actions** 页，手动跑一次 `同步上游目录`（Run workflow）验收：
   跑完看运行摘要里 5 个目录是否 ok、镜像是否 36 成功；
   再打开站上 `data/sync-status.json` 确认日期是当天。
4. 之后不用管：每天北京时间 10:00 自动同步，有变化自动提交，
   失败会在 Actions 里标红并保留旧快照（绝不覆盖坏数据）。

## index.html 只改了两处版本号（务必保留）

`app.js` 和 `upstream.js` 内容变了，版本号必须跟着 bump，老访客才能拿到新文件。
包里的 `index.html` 已经改好，只动了这两行，其余与 live 一字未动：

```html
<script src="upstream.js?v=compact-home-2" defer></script>
<script src="app.js?v=compact-home-2" defer></script>
```

如果你不打算整包覆盖 index.html，就手动把自己仓库里这两行的
`compact-home-1` 改成 `compact-home-2`（或任何新值）即可。

## 这包改了什么

- **upstream.js**：三个索引（Surge / Egern / Mihomo）的抓取改成三通道回退
  —— raw.githubusercontent → jsDelivr → 本站 `data/*.json` 快照；
  资源条目新增 `mirrorUrl` 字段（仅置顶 10 个规则有值，指向 `data/mirror/` 本站镜像）。
  另：live 在 compact-home-1 里删掉的 `ruleInstall: true,` 一行，本包保持删除后状态。
- **app.js**：只加了一处（详情弹窗 `openResource` 里，紧挨「原始链接」）：
  资源有 `mirrorUrl` 时，在「仓库文件 / 原始链接」旁边多显示一个「本站镜像 ↗」链接；
  原文链接仍是主链接，镜像只是备用入口。没有镜像的资源不显示，行为不变。
- **scripts/sync-upstream.mjs**：每天把 5 个目录快照刷到最新（校验通过才覆盖），
  并镜像置顶 10 个规则 × 3 个客户端 + 6 个 Egern 文件到 `data/mirror/` 与 `data/`。

## 已知取舍（不是漏做）

- 只镜像置顶 10 个规则（Apple、GitHub、YouTube、OpenAI、Telegram、Lan、Netflix、
  Spotify、Microsoft、Steam），没有全量镜像 3555 个文件——体积和维护都不划算，
  冷门规则上游死了就在目录里标失效即可。
- Advertising / Privacy 这类几十万行的大表只走 jsDelivr 第二通道，不进镜像。
- jsDelivr 防的是「暂时打不开」，防不了「仓库被删」；删库的真兜底只有
  `data/mirror/` 里的文件。

## 本地自检（可选）

```bash
node --check upstream.js && node --check app.js
node scripts/sync-upstream.mjs /tmp/任意空目录   # 应退出码 0，5/5 目录、36/36 镜像
```
