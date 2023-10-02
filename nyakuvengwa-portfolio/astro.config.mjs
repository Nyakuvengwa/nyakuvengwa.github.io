import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://https://nyakuvengwa.github.io",
    base: "/nyakuvengwa-portfolio",
    integrations: [mdx(), sitemap()],
});
