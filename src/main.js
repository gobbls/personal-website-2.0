import './assets/main.css';
import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';
import App from './App.vue';

// Load data from .env
export const blogBackendHost = import.meta.env.VITE_BLOG_HOST;
export const localUrl = import.meta.env.VITE_LOCAL_HOST;

export const blogBackend = {
  paths: {
    posts: blogBackendHost + "blog/posts/",
  },
  endpoints: {
    allPosts: blogBackendHost + "blog/all_posts"
  }
};

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
