import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import netlify from "@astrojs/netlify";
// https://astro.build/config
export default defineConfig({
  site: 'https://henqchav.github.io',
  base: '/',
  output: 'hybrid', 
  integrations: [tailwind(), vercel()],
  adapters: vercel()
});