import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomePage.vue"
import store from "../store/index.js"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutPage.vue"),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${store.getters.getAppTitle} - ${to.name}`
  next()
})

export default router
