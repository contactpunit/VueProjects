import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import type { RouteRecordRaw } from 'vue-router'


const routes = [
    { path: '/', name: 'home', component: HomePage},
    {path: '/about', component: AboutPage}
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
