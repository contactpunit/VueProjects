import { createApp } from 'vue';

import App from './App.vue';

import BaseContainer from './components/BaseContainer.vue';
import BaseDialog from './components/BaseDialog.vue';

const app = createApp(App);
app.component('base-container', BaseContainer);
app.component('base-dialog', BaseDialog);

app.mount('#app');
