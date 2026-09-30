import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prenupanswers.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/free/thank-you/') &&
        !page.endsWith('/free/prenup-checklist/') &&
        !page.endsWith('/free/money-talk-script/'),
    }),
  ],
});
