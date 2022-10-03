import { createRouter, createWebHashHistory  } from "vue-router"
import {routes} from "./index"

export default createRouter({
  routes: routes,
  history: createWebHashHistory(),
})
