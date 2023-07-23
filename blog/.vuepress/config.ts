import antibugTheme from "@vuepress-theme-antibug/theme";
import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from "@vuepress/bundler-vite";
import { path } from '@vuepress/utils';

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Vuepress2 Theme Antibug✨",
  description: "",
  source: path.resolve(__dirname, "../"),
  bundler: viteBundler(),
  theme: antibugTheme({})
})
