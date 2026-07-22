import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://macondo-interactive.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
