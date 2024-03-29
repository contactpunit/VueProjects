import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import AppLink from './components/AppLink.vue'

const app = createApp(App)
app.component('AppLink', AppLink)
app.use(router)
app.mount('#app')
