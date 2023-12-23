import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import './assets/style.css'
import App from './App.vue'
import PageHome from './components/PageHome.vue'

const routes = [
    {path: '/', component: PageHome}
]

const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})


const forumApp = createApp(App)
forumApp.use(router)
forumApp.mount('#app')
