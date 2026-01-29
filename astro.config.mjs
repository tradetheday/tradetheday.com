import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tradetheday.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/style-guide') && !page.includes('/components-showcase'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  redirects: {
    '/go/avatrade': 'https://www.avatrade.com/?tag=128979',
    '/go/avafutures': 'https://futures.avatrade.com/platforms/tradingview?tag=128979'
  }
});