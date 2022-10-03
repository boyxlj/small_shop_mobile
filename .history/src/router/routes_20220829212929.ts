import {RouteRecordRaw} from "vue-router"

 export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About
  },
]
