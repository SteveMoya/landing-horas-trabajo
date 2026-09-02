// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://horas-trabajo.stevemoya.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Mantener los assets pequeños como archivos reales para cachear mejor
      // y no romper políticas CSP 'self'.
      assetsInlineLimit: 0,
    },
  },
  security: { checkOrigin: true },
});