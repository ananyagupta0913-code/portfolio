// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // --- GitHub Pages address (change only if your repository name changes) ---
  // Your site will live at: https://ananyagupta0913-code.github.io/portfolio/
  // "site" = your GitHub Pages domain, "base" = "/" + your repository name.
  // If you instead name the repo "ananyagupta0913-code.github.io",
  // set base to "/" and the site will live at the plain domain.
  site: "https://ananyagupta0913-code.github.io",
  base: "/portfolio",
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
