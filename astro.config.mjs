import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
// https://astro.build/config
export default defineConfig({
  site: 'https://henqchav.github.io',
  base: 'Gelatican',
  output: 'hybrid', 
  integrations: [tailwind()]
});