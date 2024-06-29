import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  site: 'https://henqchav.github.io',
  base: 'Gelatican',
  output: 'hybrid', 
  integrations: [tailwind()],
  adapters: [vercel()],
});