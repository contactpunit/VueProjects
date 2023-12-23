import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from '@/views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import type { RouteRecordRaw } from 'vue-router'

const router = createRouter({
    routes: [
        { path: '/', name: 'home', component: HomePage},
        {path: '/about', component: AboutPage}
    ] as RouteRecordRaw[],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
