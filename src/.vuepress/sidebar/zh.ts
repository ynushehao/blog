import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "intro",
    {
      text: "项目",
      icon: "folder",
      prefix: "project/",
      link: "project/",
      children: "structure",
    },
    {
      text: "经历",
      icon: "read",
      prefix: "experience/",
      link: "experience/",
      children: "structure",
    },
  ],
});
