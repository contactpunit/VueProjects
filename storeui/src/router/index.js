import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from "../components/HomePage.vue"
import StoreList from "../components/StoreList.vue"
import CartList from "../components/CartList.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
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
