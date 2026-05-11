export type GalleryItem = {
  /** 相对 `public/` 的路径，例如 `gallery/01.jpg`；留空则显示占位格 */
  src?: string;
  alt: string;
};

/**
 * 生活照片墙：将图片放入 `public/gallery/` 后，把对应条目的 `src` 设为
 * `gallery/你的文件名.jpg`（不要带盘符或 `public/` 前缀）。
 */
export const gallery: GalleryItem[] = [
  {
    src: "DSCF4833.jpg",
    alt: "城市街头的人像照片",
  },
  {
    src: "DSC_3351.jpg",
    alt: "阳光街区中的人像照片",
  },
  {
    src: "DSCF4550.JPG",
    alt: "寺院建筑前的人像照片",
  },
  {
    src: "DSCF4738.jpg",
    alt: "窗边绿意中的人像照片",
  },
];
