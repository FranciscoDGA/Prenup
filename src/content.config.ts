import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    cluster: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Francisco Gomes Alves'),
    tldr: z.string().optional(),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .default([]),
    ctaHeading: z.string().optional(),
    ctaText: z.string().optional(),
    ctaHref: z.string().optional(),
    ctaLabel: z.string().optional(),
  }),
});

export const collections = { guides };
