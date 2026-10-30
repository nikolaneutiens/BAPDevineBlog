// @ts-check
import { defineConfig } from 'astro/config';

// The deploy workflow sets these from the GitHub repository, so renaming it needs no changes here.
export default defineConfig({
  site: process.env.SITE || undefined,
  base: process.env.BASE_PATH || undefined,
});
