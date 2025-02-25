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

export const blogBackendHost = "http://localhost:5000/";
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

/*
* Fix external "local" asset rendered on the backend.
* old tag: <img src="/img/img.png" />
* new tag: <img src="https://example.com/img/img.png" />
*/
export async function fixImageHost() {
  const images = document.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {

    var newRegExInput = new RegExp(localUrl, "g");
    var newSrc = images[i].src.replace(newRegExInput, blogBackendHost);
    images[i].src = newSrc;
  }
  return;
}

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');
