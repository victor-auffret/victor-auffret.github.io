import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import swup from '@swup/astro';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import Compress from "astro-compress";

const DEV = process.env?.NODE_ENV == "development"
const PROD = !DEV && process.env?.NODE_ENV ===  "production"

export default defineConfig({
  prefetch: true,
  site: "https://victor-auffret.github.io/",
  //base: "/",
  base: PROD ? '/docs/' : "/",
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
  image: {
    domains: ["astro.build"],
  },
  minify: true,
  outDir: "docs",
  output: "static"
});