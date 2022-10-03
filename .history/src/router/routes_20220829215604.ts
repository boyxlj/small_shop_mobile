import {RouteRecordRaw} from "vue-router"
const Home = () => import("@/views/home/index.vue")
const About = () => import("@/views/about/index.vue")
const Category = () => import("@/views/category/index.vue")
const Profile = () => import("@/views/Profile/index.vue")
const Car = () => import("@/views/car/index.vue")

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
