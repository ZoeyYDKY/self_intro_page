// @ts-check
import { defineConfig } from 'astro/config';

/**
 * GitHub Pages（公网链接访问）
 * --------------------------------------------
 * 目标：访客在浏览器里打开 `site` 对应地址即可，无需本地安装或部署。
 * 构建产物由 `.github/workflows/deploy.yml` 推送到 GitHub Pages。
 *
 * 1. `site` 必须与 Pages 上的真实 URL 一致（含末尾 `/` 也可）。
 * 2. 项目仓库 Pages（非 username.github.io 根站）必须设置 `base: '/仓库名/'`，
 *    所有资源与路由会正确带上前缀。
 */
export default defineConfig({
	site: 'https://zoeyydky.github.io/self_intro_page/',
	// 项目仓库 Pages：资源路径需带仓库名前缀
	base: '/self_intro_page/',
	output: 'static',
});
