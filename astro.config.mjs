import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
//import sitemap from "@astrojs/sitemap";
import solid from "@astrojs/solid-js";
//import mdx from "@astrojs/mdx";
/*
import Compress from "astro-compress";
Compress({
  CSS: false,
    Image: false,
    Action: {
      Passed: async () => true, // https://github.com/PlayForm/Compress/issues/376
    },
  }),
*/

export default defineConfig({
  //prefetch: true,
  site: "https://victor-auffret.github.io/",
  base: "/",
  integrations: [
    solid({
      include: ["**/solid/*"],
    })
  ],
  outDir: "docs",
});