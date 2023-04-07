import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "好好先生",
      description: "好好先生的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
