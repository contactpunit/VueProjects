import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import BrazilPage from '../views/BrazilPage.vue'
import HawaiiPage from '../views/HawaiiPage.vue'
import JamaicaPage from '../views/JamaicaPage.vue'
import PanamaPage from '../views/PanamaPage.vue'
import type { RouteRecordRaw } from 'vue-router'


const routes = [
    { path: '/', name: 'home', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/brazil', component: BrazilPage},
    {path: '/hawaii', component: HawaiiPage},
    {path: '/panama', component: PanamaPage},
    {path: '/jamaica', component: JamaicaPage}
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
