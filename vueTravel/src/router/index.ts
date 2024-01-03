import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import type { RouteRecordRaw } from 'vue-router'
import sourceData from '../data.json'


const routes = [
    {path: '/', name: 'home', component: HomePage, alias: '/home'},
    {path: '/about',name: 'about', component: ()=> import('../views/AboutPage.vue')},
    { path: '/login', name: 'login', component: () => import('../views/LoginPage.vue')},
    { path: '/example/:id(\\d+)', name: 'example', component: () => import('../views/LoginPage.vue')},
    { 
        path: '/protected',
        name: 'protected',
        // component: ()=> import('../views/ProtectedPage.vue'),
        components: {
            default: () => import('../views/ProtectedPage.vue'),
            SideBar: () => import('../components/SideBar.vue')
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/invoices',
        name: 'invoices',
        // component: () => import('../views/InvoicesShow.vue'),
        components: {
            default: () => import('../views/InvoicesShow.vue'),
            SideBar: () => import('../components/SideBar.vue')
        } ,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/destination/:id/:slug', 
        name: 'destination',
        component: ()=> import('../views/ShowDestination.vue'),
        props: true,
        beforeEnter(to, _) {
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
    scrollBehavior(_, _2, savedPosition) {
        return savedPosition || {top: 0}
    }
})

router.beforeEach((to, _) => {
    if(to.meta?.requiresAuth) {
        if(window.name !== 'protected')
        return {
            name: 'login'
        }
    }
})

export default router
