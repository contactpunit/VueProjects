import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'


const routes = [
    { path: '/', name: 'home', component: HomePage},
    {path: '/about', component: ()=> import('../views/AboutPage.vue')},
    {path: '/brazil', component: ()=> import('../views/BrazilPage.vue')},
    {path: '/hawaii', component: ()=> import('../views/HawaiiPage.vue')},
    {path: '/panama', component: ()=> import('../views/PanamaPage.vue')},
    {path: '/jamaica', component: ()=> import('../views/JamaicaPage.vue')}
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
