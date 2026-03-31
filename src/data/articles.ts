export type Article = {
  title: string;
  url: string;
  date?: string;
  platform?: string;
};

/** 专栏文章：按需在此追加 `{ title, url, date?, platform? }` */
export const articles: Article[] = [];
