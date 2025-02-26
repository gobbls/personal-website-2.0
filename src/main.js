/*
* INFO:
* 'main.css' was imported when creating the Vue scaffolding,
* but why here?
*/
import './assets/main.css';

import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';
import App from './App.vue';

// WARN:
// FOR LOCAL DEVELOPMENT ONLY, REPLACE BEFORE BUILD.
// export const blogBackendHost = "http://localhost:5000/";
export const blogBackendHost = "http://192.168.1.107:5000/";

// WARN:
// FOR REGEX REPLACEMENT IN <img> TAGS, FIX BEFORE BUILD.
// FOR LOCAL DEVELOPMENT ONLY, REPLACE BEFORE BUILD.
export const localUrl = "http://localhost:5173/";

export const blogBackend = {
  // HTML responses
  paths: {
    posts: blogBackendHost + "blog/posts/",
  },
  // JSON responses
  endpoints: {
    allPosts: blogBackendHost + "blog/all_posts"
  }
};

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
