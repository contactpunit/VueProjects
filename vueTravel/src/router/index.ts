import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'
import sourceData from '../data.json'


const routes = [
    {path: '/', name: 'home', component: HomePage},
    {path: '/about',name: 'about', component: ()=> import('../views/AboutPage.vue')},
    {
        path: '/destination/:id/:slug',
        name: 'destination',
        component: ()=> import('../views/ShowDestination.vue'),
        props: true,
        beforeEnter(to, from) {
            const reqRoute = sourceData.destinations.find(destination => destination.id === +to.params.id)
            if(!reqRoute) {
                return {
                    name: 'NotFound',
                    params: {pathMatch: to.path.split('/').slice(1)},
                    query: to.query,
                    hash: to.hash
                }
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'experienceShow',
                component: ()=> import('../views/ExperienceShow.vue'),
                props: true
            }
        ]
    },
    {path: '/:pathMatch(.*)*',name: 'NotFound', component: ()=> import('../views/NotFound.vue')},
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'router-bold',
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {top: 0}
    }
})

export default router
