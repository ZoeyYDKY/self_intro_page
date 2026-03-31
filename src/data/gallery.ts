export type GalleryItem = {
  /** 相对 `public/` 的路径，例如 `gallery/01.jpg`；留空则显示占位格 */
  src?: string;
  alt: string;
  /** 图片下方短说明，可选 */
  caption?: string;
};

/**
 * 生活照片墙：将图片放入 `public/gallery/` 后，把对应条目的 `src` 设为
 * `gallery/你的文件名.jpg`（不要带盘符或 `public/` 前缀）。
 */
export const gallery: GalleryItem[] = [
  { alt: "生活剪影 1", caption: "待替换：放入 public/gallery/ 并填写 src" },
  { alt: "生活剪影 2", caption: "待替换" },
  { alt: "生活剪影 3", caption: "待替换" },
  { alt: "生活剪影 4", caption: "待替换" },
  { alt: "生活剪影 5", caption: "待替换" },
  { alt: "生活剪影 6", caption: "待替换" },
];
