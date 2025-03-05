<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { fixSrcHost } from '../helpers.js';
import { getBlogPost } from '../api.js';

const post = ref(null);

onMounted(async () => {
  post.value = await getBlogPost();
  await nextTick();
  fixSrcHost(document.querySelectorAll(".wrapper img"));
});
</script>


<template>
  <div class="wrapper" v-if="post" v-html="post"></div>
  <div v-else>
    <h3>Loading post...</h3>
  </div>
</template>
