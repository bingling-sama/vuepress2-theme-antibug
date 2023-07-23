import type {App, Theme}from "@vuepress/core"
import { path, getDirname } from '@vuepress/utils';

const __dirname = getDirname(import.meta.url)
const resolve = (...args: string[]) => path.resolve(__dirname, "../", ...args)

export const antibugTheme = (options: any): Theme => {
  return (app: App) => {
    return {
      name: "vuepress-theme-antibug",
      clientConfigFile: resolve("client/config.js"),
      plugins: []
    }
  }
}