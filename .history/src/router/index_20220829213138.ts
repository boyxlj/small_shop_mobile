import { createRouter, createWebHashHistory ,RouteRecordRaw } from "vue-router"
import {routes} from "./routes"
export default createRouter({
  routes: routes,
  history: createWebHashHistory(),
})
