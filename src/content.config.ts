import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case studies. One Markdown file per company in src/content/work/.
 * Set `draft: true` to keep a case study off the site while you write it.
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    draft: z.boolean().default(false),
    order: z.number(),
    company: z.string(),
    years: z.string(),
    title: z.string(),
    // Home-page card
    cardNumber: z.string(),
    cardNumberLabel: z.string(),
    cardSummary: z.string(),
    // Case study page
    lede: z.string(),
    heroImage: z.object({ src: z.string(), alt: z.string() }).optional(),
    results: z.array(z.object({ number: z.string(), label: z.string() })).default([]),
    figure: z.enum(['waterfall']).optional(),
    problem: z.string(),
    didIntro: z.string(),
    did: z.array(z.object({ name: z.string(), text: z.string() })),
    result: z.string(),
    tools: z.array(z.string()).default([]),
    next: z.string().optional(), // id of the next case study, e.g. "infotrust"
    nextCta: z.string().optional(),
  }),
});

export const collections = { work };
