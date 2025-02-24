<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { backend } from '../main.js';

const route = useRoute();

const loading = ref(true);

// get the HTML from flask here
const post = ref(null);

async function getBlogPost() {
  try {
    const response = await fetch(backend.postsApiEndpoint + route.params.post);
    if (response.ok) {
      post.value = await response.text();
      loading.value = false;
    } else {
      post.value = "failed to fetch posts";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

onMounted(() => {
  getBlogPost();
})
</script>


<template>
  <div v-if="post">
    <div v-html="post"></div>
  </div>
  <div v-else>
    <h3>Loading post...</h3>
  </div>
</template>


<style scoped>
/**/
</style>
