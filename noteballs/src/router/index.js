import { createRouter, createWebHashHistory } from 'vue-router'

import NotesList from '../pages/NotesList.vue'
import StatsList from '../pages/StatsList.vue'

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

export default router