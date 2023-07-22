import { defineUserConfig } from "vuepress";
import antibugTheme from "../../theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Vuepress2 Theme Antibug✨",
  description: "A vuepress2 theme based on Modern Design.",
  theme: antibugTheme()
})