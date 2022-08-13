import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from "../views/HomePage.vue"
import StoreList from "../views/StoreList.vue"
import CartList from "../views/CartList.vue"

Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/store",
    name: "store",
    component: StoreList,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartList,
  },
]

const router = new VueRouter({
  routes,
})

export default router
