import { createRouter, createWebHistory } from "vue-router"

import ProductList from "./components/ProductList.vue"
import ProductAdd from "./components/ProductAdd.vue"
import ProductDetail from "./components/ProductDetail.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductList },
    { path: "/addproduct", component: ProductAdd },
    { path: "/products/:id", component: ProductDetail },
  ],
})

export default router
