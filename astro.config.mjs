import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: "https://www.bledapartmaji.si/",
  i18n: { locales: ['en', 'sl'], defaultLocale: 'en', routing: { prefixDefaultLocale: false } },
  integrations: [sitemap()],
});
