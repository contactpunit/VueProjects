import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalView from '../views/ModalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsList.vue')
    },
    {
      path: '/post/:id',
      name: 'postdetail',
      component: () => import('../views/PostDetail.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalView
    }
  ]
})

export default router
