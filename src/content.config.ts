import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    year: z.number(),
    stack: z.array(z.string()),
    url: z.url(),
    order: z.number(),
  }),
});

const robots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/robots' }),
  schema: z.object({
    name: z.string(),
    weapon: z.string(),
    status: z.enum(['building', 'active', 'retired']),
    order: z.number(),
  }),
});

export const collections = { projects, robots };
