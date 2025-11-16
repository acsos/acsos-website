import { defineCollection, z } from 'astro:content';

const conferences = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.number(),
    edition: z.number(),
    name: z.string(),
    location: z.string(),
    dates: z.string(),
    website: z.string().url().optional(),
    acceptanceRate: z.string().optional(),
    generalChairs: z.array(z.object({
      name: z.string(),
      affiliation: z.string(),
      country: z.string().optional(),
    })),
    programChairs: z.array(z.object({
      name: z.string(),
      affiliation: z.string(),
      country: z.string().optional(),
    })).optional(),
    workshopChairs: z.array(z.object({
      name: z.string(),
      affiliation: z.string(),
    })).optional(),
    published: z.boolean().default(true),
    series: z.enum(['ACSOS', 'ICAC', 'SASO']).default('ACSOS'),
  }),
});

const awards = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.number(),
    category: z.enum(['karsten-schwan', 'best-student', 'best-poster-demo', 'best-artifact']),
    title: z.string(),
    paperUrl: z.string().url().optional(),
    image: z.string().optional(),
    authors: z.array(z.object({
      name: z.string(),
      affiliation: z.string().optional(),
    })),
    conference: z.enum(['ACSOS', 'ICAC', 'SASO']).default('ACSOS'),
  }),
});

const leadership = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    affiliation: z.string(),
    image: z.string().optional(),
    website: z.string().url().optional(),
    email: z.string().email().optional(),
    order: z.number().default(999),
    groups: z.array(z.enum(['steering', 'advisory'])),
  }),
});

export const collections = {
  conferences,
  awards,
  leadership,
};
