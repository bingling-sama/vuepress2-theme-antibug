import { defineClientConfig } from "@vuepress/client"
import AntibugLayout from "./layouts/AntibugLayout.vue"
import AntibugNotFound from "./layouts/AntibugNotFound.vue"

export default defineClientConfig({
  layouts: {
    AntibugLayout,
    AntibugNotFound
  }
})