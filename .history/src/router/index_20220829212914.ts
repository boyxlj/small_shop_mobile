import { createRouter, createWebHashHistory,  } from "vue-router"
const Home = () => import("@/views/home/index.vue")
const About = () => import("@/views/about/index.vue")


export default createRouter({
  routes: routes,
  history: createWebHashHistory(),
})
