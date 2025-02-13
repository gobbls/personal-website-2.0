// INFO: 'main.css' was imported when creating the Vue scaffolding, but why here?
import './assets/main.css';

import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
