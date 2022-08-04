import { createRouter, createWebHistory } from "vue-router"

import AboutPage from "../pages/AboutPage.vue"
import HomePage from "../pages/HomePage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/about", component: AboutPage, name: "about" },
    { path: "/home", component: HomePage, name: "home" },
  ],
})

export default router
