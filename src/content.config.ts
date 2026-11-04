import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TAGS } from './lib/tags';
import { MEMBER_IDS } from './lib/team';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      /** Who made the post: 'lomme', 'ximen' or 'nikolas'. */
      author: z.enum(MEMBER_IDS).optional(),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      tags: z.array(z.enum(TAGS)).default([]),
      /** How AI was used for this post. Shown in a box at the end of the post. */
      ai: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

/** Feedback reports: talks with the customer, experts or teachers. Files starting with _ are ignored. */
const feedback = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/feedback' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Who the feedback came from. */
    type: z.enum(['Customer', 'Expert', 'Teacher', 'User test']),
    /** Name and/or organisation of the person giving feedback. */
    with: z.string(),
    /** Who wrote the report. */
    author: z.enum(MEMBER_IDS),
    /** Team members who were there. */
    attendees: z.array(z.enum(MEMBER_IDS)).default([]),
    summary: z.string(),
  }),
});

export const collections = { blog, feedback };
