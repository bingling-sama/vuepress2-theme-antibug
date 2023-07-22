import type { Theme } from "@vuepress/core"
import { defaultTheme } from "@vuepress/theme-default"
import { getDirname, path } from "@vuepress/utils"

const __dirname = getDirname(import.meta.url)

export const antibugTheme = (): Theme => {
  return {
    name: "vuepress-theme-antibug",
    clientConfigFile: path.resolve(__dirname, "./client.ts"),
    extends: defaultTheme()
  }
}