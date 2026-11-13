import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_IDS } from './lib/feedback';
import { TAGS } from './lib/tags';
import { MEMBER_IDS } from './lib/team';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      /** Who made the post: 'lomme', 'ximen' or 'nikola'. */
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

/**
 * Feedback reports: one file per feedback session (client, coach, peers or experts).
 * The file name is the URL: client-concept-validation.md -> /feedback/client-concept-validation/.
 * Files starting with _ are ignored (see _template.md).
 */
const feedback = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/feedback' }),
  schema: z.object({
    title: z.string(),
    /** Day of the session. Use the 1st of the month together with monthOnly when the day is not known. */
    date: z.coerce.date(),
    monthOnly: z.boolean().default(false),
    category: z.enum(CATEGORY_IDS),
    /** Short text for the card on the overview page. */
    description: z.string(),
    /** 2-3 key topics, shown on the card. */
    tags: z.array(z.string()).min(1).max(3),
    /** Short introduction at the top of the report. */
    intro: z.string(),
    /** The most important points, shown before the full report. */
    takeaways: z.array(z.string()).default([]),
    /**
     * The full report, one section per topic. Keep these apart:
     * feedback = what we were told or asked, response = what we answered,
     * decision = something that was validated in the session, next = a proposed next step (not done yet).
     */
    sections: z
      .array(
        z.object({
          topic: z.string(),
          feedback: z.string().optional(),
          details: z.array(z.string()).default([]),
          response: z.string().optional(),
          responseSteps: z.array(z.string()).default([]),
          decision: z.string().optional(),
          next: z.string().optional(),
        }),
      )
      .default([]),
    /** What we do with the feedback. Only use status 'done' when it is actually finished. */
    actions: z
      .array(z.object({ text: z.string(), status: z.enum(['planned', 'decided', 'done']).default('planned') }))
      .default([]),
    /** Who wrote the report and who was there (optional). */
    author: z.enum(MEMBER_IDS).optional(),
    attendees: z.array(z.enum(MEMBER_IDS)).default([]),
  }),
});

export const collections = { blog, feedback };
