import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://macondo-atlas.vercel.app',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
