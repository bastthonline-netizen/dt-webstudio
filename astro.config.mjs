// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Gehostet auf Cloudflare (Workers Static Assets), Live-Domain dt-webstudio.de.
export default defineConfig({
  site: 'https://dt-webstudio.de',
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
