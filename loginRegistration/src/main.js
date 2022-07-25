import { createApp } from 'vue';
import router from './router.js';
import store from './store/index.js';

import App from './App.vue';
import BaseDialog from './components/pages/BaseDialog.vue';
import BaseFooter from './components/pages/BaseFooter.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-footer', BaseFooter);
app.component('base-dialog', BaseDialog);

app.mount('#app');
