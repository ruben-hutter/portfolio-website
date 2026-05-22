import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/en': '/',
  },
});
