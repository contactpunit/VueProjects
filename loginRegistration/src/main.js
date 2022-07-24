import { createApp } from 'vue';
import router from './router.js';

import App from './App.vue';
import BaseFooter from './components/pages/BaseFooter.vue';

const app = createApp(App);

app.use(router);

app.component('base-footer', BaseFooter);

app.mount('#app');
