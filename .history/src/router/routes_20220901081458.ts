import { RouteRecordRaw } from "vue-router"
const Shop = () => import("@/views/shop/index.vue")
const Home = () => import("@/views/home/index.vue")
const Category = () => import("@/views/category/index.vue")
const Car = () => import("@/views/car/index.vue")
const Profile = () => import("@/views/profile/index.vue")
const Details = () => import("@/views/details/index.vue")
const Search = () => import("@/views/search/index.vue")
const Collect = () => import("@/views/search/index.vue")
const Order = () => import("@/views/search/index.vue")
const Login = () => import("@/views/search/index.vue")

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/shop/home"
  },
  {
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "home",
        component: Home,
        meta: { keepAlive: true }
      },
      {
        path: "category",
        component: Category,
      },
      {
        path: "car",
        component: Car,
      },
      {
        path: "profile",
        component: Profile,
      },
    ]
  },
  { path: "/details", component: Details },
  { path: "/search", component: Search, meta: { keepAlive: true } },
  { path: "/collect", component: Collect },
  { path: "/order", component: Order },
  { path: "/login", component: Login }

]