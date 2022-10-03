import {RouteRecordRaw} from "vue-router"
const Home = () => import("@/views/home/index.vue")
const About = () => import("@/views/about/index.vue")

 export default  [
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
