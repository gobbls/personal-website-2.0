<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { blogBackend, blogBackendHost, localUrl } from '../main.js';

const route = useRoute();
const blogPostUrl = blogBackend.paths.posts + route.params.post;
const blogPostFetchErrorMsg = "Failed to fetch post, blog server might be down.";
const post = ref(null);

/*
* Fix external "local" asset rendered on the backend.
* old tag: <img src="/img/img.png" />
* new tag: <img src="https://[myBackendServer].com/img/img.png" />
*/
function fixImageHost() {
  // Collect all images inside the '.wrapper' class.
  const images = document.querySelectorAll(".wrapper img");

  // Fix the URL for each image / item.
  images.forEach(img => {
    img.src = img.src.replace(localUrl, blogBackendHost);
  });
}

async function getBlogPost() {
  try {
    const response = await fetch(blogPostUrl);
    if (response.ok) {
      post.value = await response.text();
    } else {
      post.value = blogPostFetchErrorMsg;
    }
  } catch (error) {
    console.error("Error:", error);
  }

  // Wait for the DOM to render the post before modifying the contents of <img>.
  await nextTick();
  fixImageHost();
}
onMounted(() => { getBlogPost(); });
</script>


<template>
  <div class="wrapper" v-if="post" v-html="post"></div>
  <div v-else>
    <h3>Loading post...</h3>
  </div>
</template>
