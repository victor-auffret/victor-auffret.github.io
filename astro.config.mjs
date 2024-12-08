import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import swup from '@swup/astro';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import Compress from "astro-compress";

export default defineConfig({
  prefetch: true,
  site: "https://victor-auffret.github.io/",
  base: "/",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  integrations: [
    swup(),
    solid({
      include: ["**/solid/*"],
    }),
    mdx(),
    sitemap(),
    Compress({
      JavaScript: true
    })
  ],
  minify: true,
  outDir: "docs",
  output: "static"
});