import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    bullets: z.array(z.string()).default([]),
    priceBand: z.string().default('Under $25'),
    emoji: z.string().default('✨'),
    image: z.string().optional(),
    imageUrl: z.string().optional(),
    bestFor: z.string().optional(),
    headsUp: z.string().optional(),
    specs: z.array(z.string()).default([]),
    youtubeId: z.string().optional(),
    amazonUrl: z.string().optional(),
    searchQuery: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const roundups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/roundups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    products: z.array(z.string()).default([]),
    date: z.coerce.date(),
  }),
});

export const collections = { products, roundups };
