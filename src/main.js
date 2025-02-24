// INFO: 'main.css' was imported when creating the Vue scaffolding, but why here?
import './assets/main.css';

import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';
import App from './App.vue';

// Global access to backend API
export const backend = {
  apiEndpoint: "http://localhost:5000/",
  allPostsApiEndpoint: "http://localhost:5000/blog/all_posts",
  postsApiEndpoint: "http://localhost:5000/blog/posts/"
}

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
