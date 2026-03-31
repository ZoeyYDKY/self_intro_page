# 张可沁 · 个人主页

你好，这里是张可沁的个人介绍网站源码仓库。页面用于展示个人简历、项目经历、写作链接与一些生活向内容，风格简洁、偏静态，便于长期维护。

## 在线访问（分享给他人）

**任何人只需在浏览器里打开下面这个链接即可浏览本站，无需安装任何软件，也无需在本地执行部署命令。**

**[https://zoeyydky.github.io/self_intro_page/](https://zoeyydky.github.io/self_intro_page/)**

说明：

- **访客**：复制或点击链接即可访问；不需要 Node、不需要 `npm`、不需要懂部署。
- **你（维护者）**：把修改推送到本仓库的 `main` 分支后，[GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow) 会自动构建并更新线上页面；你不需要把电脑当作服务器。
- 若链接暂时打不开，请等 1～2 分钟让构建完成，或在仓库 **Actions** 里查看最近一次工作流是否成功。

> 仓库 **Settings → Pages** 里，**Source** 需选择 **GitHub Actions**（首次启用 Pages 时一次性设置即可）。

## 关于作者

- GitHub：[@ZoeyYDKY](https://github.com/ZoeyYDKY)
- 本仓库：[ZoeyYDKY/self_intro_page](https://github.com/ZoeyYDKY/self_intro_page)

网站内容由作者维护；转载请注明出处或链接，勿用于误导性用途。

---

## 开发者说明（简版）

本站使用 [Astro](https://astro.build/) 构建为**纯静态页面**，托管在 **GitHub Pages**，因此访问者始终只需要上面的公网链接即可。

```bash
git clone https://github.com/ZoeyYDKY/self_intro_page.git
cd self_intro_page
npm install
npm run dev
```

本地预览默认地址：`http://localhost:4321/`。构建生产文件：`npm run build`，输出目录为 `dist/`。

更详细的目录说明、内容修改方式与部署注意，见仓库中的 [CONTRIBUTING.md](CONTRIBUTING.md)。
