import {RouteRecordRaw} from "vue-router"
const Shop = () => import("@/views/shop/index.vue")
const Home = () => import("@/views/Home/index.vue")
const Category = () => import("@/views/category/index.vue")
const Car = () => import("@/views/car/index.vue")
const Profile = () => import("@/views/profile/index.vue")

 export const routes:RouteRecordRaw[]= [
  {
    path: "/",
    redirect: "/shop"
  },
  {
    path: "/shop",
    component: Shop,
    children:[
      {
        path: "/home",
        component: Home,
      },
      {
        path: "/home",
        component: Category,
      },
      {
        path: "/home",
        component: Profile,
      },
    ]
  },
  
  
]
