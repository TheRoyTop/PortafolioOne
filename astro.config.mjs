import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://TheRoyTop.github.io',
  base: '/',
  integrations: [tailwind()]
});