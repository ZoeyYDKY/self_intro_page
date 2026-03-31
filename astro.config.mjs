// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Publishing (GitHub Pages)
 * -------------------------
 * 1. Set `site` to your real URL, e.g. `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
 *    (trailing slash is fine.)
 * 2. If this is a **project** site (repo pages, not `username.github.io`), also set
 *    `base: '/YOUR_REPO_NAME/'` so `/YOUR_REPO_NAME/` is prefixed on all asset and page URLs.
 *    For a **user/org** site at the domain root, omit `base` or use `base: '/'`.
 */
export default defineConfig({
	site: 'https://zoeyydky.github.io/self_intro_page/',
	// 项目仓库 Pages：资源路径需带仓库名前缀
	base: '/self_intro_page/',
	output: 'static',
});
