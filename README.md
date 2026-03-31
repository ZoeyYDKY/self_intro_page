# Personal Website

这是一个基于 Astro 的个人网站模板，风格参考 Manus：黑白灰配色、较大留白、排版克制，适合展示你的照片、简历、项目经验、GitHub 和专栏文章。

## 本地开发

```bash
npm install
npm run dev
```

构建静态产物：

```bash
npm run build
```

## 你需要修改的内容

### 1. 站点基础信息

编辑 `D:\nettry\src\site.config.ts`：

- `name`：你的名字
- `tagline`：首页主标题下的一句话介绍
- `summary`：更完整的个人简介
- `githubUrl`：你的 GitHub 主页完整 URL；**留空字符串**则隐藏首页与页脚中的 GitHub 入口
- `email`：你的邮箱
- `avatarUrl`：头像路径，当前为 `/avatar.jpg`

### 2. 头像

请将证件照复制到 `D:\nettry\public\avatar.jpg`（与 `site.config` 中的 `avatarUrl` 一致）。若文件缺失，浏览器会显示裂图，直到你放入图片。

也可改用 `public/avatar.svg` 等路径，并同步修改 `avatarUrl`。

### 3. 简历内容

编辑 `D:\nettry\src\content\resume.md`，把示例内容换成你的真实经历。

### 4. 项目经验

每个项目都是一个 Markdown 文件，放在 `D:\nettry\src\content\projects\`。

你可以继续新增类似文件，格式如下：

```md
---
title: "项目名称"
date: "2026-03-25"
tags:
  - Astro
  - Design
link: "https://example.com/project"
---

这里写项目描述。
```

### 5. 专栏文章

编辑 `D:\nettry\src\data\articles.ts`，按数组格式维护文章标题、链接、日期和平台。

## GitHub Pages 部署

仓库里已经准备好 `D:\nettry\.github\workflows\deploy.yml`。

### 1. 修改站点地址

编辑 `D:\nettry\astro.config.mjs`：

- `site` 改成你的真实地址，例如：`https://yourname.github.io/portfolio/`
- 如果你部署的是项目仓库页面，而不是 `username.github.io` 根站点，取消注释：

```js
base: '/portfolio/'
```

如果你使用的是 `username.github.io` 这种根域名仓库，就不要设置 `base`，或者设成 `'/'`。

### 2. 推送到 GitHub

将代码推到 GitHub 仓库的 `main` 分支。

### 3. 开启 GitHub Pages

在仓库设置里：

1. 打开 `Settings`
2. 进入 `Pages`
3. 将 `Source` 设为 `GitHub Actions`

之后每次推送到 `main`，GitHub Actions 都会自动构建并发布。

## 自定义域名

如果你购买了自己的域名，后续可以在 GitHub Pages 中绑定自定义域名。这样即使以后切换到 Cloudflare Pages 或 Netlify，也只需要调整 DNS，不需要改对外网址。

## 当前文件结构

- `D:\nettry\src\pages\index.astro`：首页
- `D:\nettry\src\layouts\Layout.astro`：全局布局
- `D:\nettry\src\styles\global.css`：全局样式
- `D:\nettry\src\content\resume.md`：简历
- `D:\nettry\src\content\projects\`：项目 Markdown
- `D:\nettry\src\data\articles.ts`：专栏文章列表
- `D:\nettry\src\site.config.ts`：站点配置
- `D:\nettry\.github\workflows\deploy.yml`：自动部署工作流
