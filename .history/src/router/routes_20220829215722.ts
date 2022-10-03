import {RouteRecordRaw} from "vue-router"
const Shop = () => import("@/views/shop/index.vue")
const Home = () => import("@/views/Home/index.vue")
const Category = () => import("@/views/category/index.vue")
const Profile = () => import("@/views/profile/index.vue")
const Car = () => import("@/views/car/index.vue")

 export const routes:RouteRecordRaw[]= [
  {
    path: "/",
    redirect: "/shop"
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
