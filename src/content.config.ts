import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
