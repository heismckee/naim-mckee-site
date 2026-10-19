// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change `site` to your real domain once it's connected (e.g. https://yourdomain.com).
export default defineConfig({
  site: 'https://naim-mckee-site.pages.dev',
  integrations: [sitemap()],
});
