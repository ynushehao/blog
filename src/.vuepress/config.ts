import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  head: [['link', { rel: 'icon', href: 'head.png' }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "个人主页",
      description: "好好先生的个人主页",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
