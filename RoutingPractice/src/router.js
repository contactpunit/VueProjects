import { createRouter, createWebHistory } from "vue-router"

import ProductList from "./components/ProductList.vue"
import ProductAdd from "./components/ProductAdd.vue"
import ProductItem from "./components/ProductItem.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductList },
    { path: "/addproduct", component: ProductAdd },
    { path: "/products/:id", component: ProductItem },
  ],
})

export default router
