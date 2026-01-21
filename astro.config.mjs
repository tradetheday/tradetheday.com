import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    format: 'directory'
  },
  redirects: {
    '/go/avatrade': 'https://www.avatrade.com/trading-account?tag=128979'
  }
});