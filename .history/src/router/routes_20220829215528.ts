import {RouteRecordRaw} from "vue-router"
const Home = () => import("@/views/home/index.vue")
const About = () => import("@/views/about/index.vue")
const Category = () => import("@/views/about/index.vue")
const Profile = () => import("@/views/about/index.vue")
const About = () => import("@/views/about/index.vue")

 export const routes:RouteRecordRaw[]= [
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
