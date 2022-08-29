import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import NotesList from './pages/NotesList.vue'
import StatsList from './pages/StatsList.vue'

import './assets/main.css'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'notes',
            component: NotesList
        },
        {
            path: '/stats',
            name: 'stats',
            component: StatsList
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
