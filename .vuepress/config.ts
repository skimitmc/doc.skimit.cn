import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "skimit",
      description: "A Minecraft survival+ server",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "skimit",
      description: "一个 Minecraft 生存+ 服务器",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
