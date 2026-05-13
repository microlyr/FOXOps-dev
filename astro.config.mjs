import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: 'static',
  site: 'https://microlyr.github.io',
  base: process.env.BASE_URL || '/',
});
