/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
// })

import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  routes: [
    {path: '/home', name: 'home', component: () =>import('@/components/HelloWorld.vue')},
    {path: '/', redirect: '/home'}
  ],
  history: createWebHistory()
})

export default router
