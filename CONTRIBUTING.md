# 维护说明

本文面向需要修改本站源码的维护者；一般访客只需阅读根目录 [README.md](README.md) 中的在线地址即可。

## 内容与配置

| 说明 | 位置 |
|------|------|
| 姓名、简介、邮箱、GitHub、头像路径、兴趣爱好文案 | `src/site.config.ts` |
| 简历正文 | `src/content/resume.md` |
| 项目经历（每项一个文件） | `src/content/projects/*.md` |
| 专栏文章列表 | `src/data/articles.ts` |
| 生活照片槽位与说明 | `src/data/gallery.ts` |

将图片放入 `public/` 下，例如头像 `public/avatar.jpg`，照片墙 `public/gallery/your-photo.jpg`，再在 `gallery.ts` 中把对应条目的 `src` 设为 `gallery/your-photo.jpg`（路径相对网站根路径，勿带盘符）。

## 站点地址（GitHub Pages）

发布地址与 `astro.config.mjs` 中的 `site`、`base` 需一致。当前为项目站形式：

- `site`: `https://zoeyydky.github.io/self_intro_page/`
- `base`: `/self_intro_page/`

若将来改为用户主页仓库 `username.github.io` 根目录部署，需相应调整 `base`（常为 `/` 或省略）。

## 部署

推送至 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）会执行构建并部署。仓库 **Settings → Pages** 中 **Source** 请选择 **GitHub Actions**。
