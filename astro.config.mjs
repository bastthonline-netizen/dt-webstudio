// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Gehostet auf Cloudflare Pages (im Root, kein Unterpfad).
// site später auf die echte Domain umstellen (z. B. https://dt-webstudio.de).
export default defineConfig({
  site: 'https://dt-webstudio.pages.dev',
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
