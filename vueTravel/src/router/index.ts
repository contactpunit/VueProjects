import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'


const routes = [
    { path: '/', name: 'home', component: HomePage},
    {path: '/about',name: 'about', component: ()=> import('../views/AboutPage.vue')},
    {path: '/brazil', name: 'brazil', component: ()=> import('../views/BrazilPage.vue')},
    {path: '/hawaii', name: 'hawaii', component: ()=> import('../views/HawaiiPage.vue')},
    {path: '/panama', name: 'panama', component: ()=> import('../views/PanamaPage.vue')},
    {path: '/jamaica', name:'jamaica', component: ()=> import('../views/JamaicaPage.vue')},
    {path: '/destination/:id', name: 'destination', component: ()=> import('../views/HomePage.vue')},
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'router-bold'
})

export default router
