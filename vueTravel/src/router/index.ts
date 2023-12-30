import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'


const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/about',name: 'about', component: ()=> import('../views/AboutPage.vue')},
    {
        path: '/destination/:id/:slug',
        name: 'destination',
        component: ()=> import('../views/ShowDestination.vue'),
        props: true
    },
    {
        path: '/destination/:id/:slug/:experienceSlug',
        name: 'experienceShow',
        component: ()=> import('../views/ExperienceShow.vue'),
        props: true
    },
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'router-bold'
})

export default router
