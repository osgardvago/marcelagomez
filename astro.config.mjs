// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },
    imageService: {
    build: 'compile',
    runtime: 'cloudflare-binding'
  }
    imageService: "cloudflare"
  }),

  vite: {
    plugins: [tailwindcss()]
  },
  optimizeDeps: {
      // Exclude the cache directory or specific packages causing issues
      exclude: ['node_modules/.cache', '@tailwindcss/vite'],
    },


});
