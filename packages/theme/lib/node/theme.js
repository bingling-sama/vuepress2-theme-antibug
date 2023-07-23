import { path, getDirname } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
const resolve = (...args) => path.resolve(__dirname, "../", ...args);
export const antibugTheme = (options) => {
    return (app) => {
        return {
            name: "vuepress-theme-antibug",
            clientConfigFile: resolve("client/config.js"),
            plugins: []
        };
    };
};
