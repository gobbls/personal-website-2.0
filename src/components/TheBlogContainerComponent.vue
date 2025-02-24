<script setup>
import BlogPostPreviewComponent from "@/components/BlogPostPreviewComponent.vue"
import { ref, onMounted } from 'vue';

const apiEndpoint = "http://localhost:8000/";
const allPostsApiEndpoint = apiEndpoint + "blog/all_posts";

const loading = ref(true);
const json = ref(null);

async function getBlogPostsJson() {
  try {
    const response = await fetch(allPostsApiEndpoint);
    if (response.ok) {
      json.value = await response.json();
      loading.value = false;
    } else {
      json.value = "failed to fetch posts";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

onMounted(() => {
  getBlogPostsJson();
})
</script>


<template>
  <div v-if="loading">loading posts...</div>
  <div class="container" v-else="json">
    <div v-for="property in json" :key="property">
      {{ console.log(property) }}
      <BlogPostPreviewComponent :title="property['title']" :tags="property['tags']"
        :dateOfPosting="property['date-of-posting']" :dateOfLastEdit="property['date-of-last-edit']"
        :description="property['description']" :postUrl="property['post-url']"
        :prevImgUrl="apiEndpoint + property['preview-img-url']" />
    </div>
  </div>
</template>


<style scoped>
div.container {
  display: grid;
  grid-template-rows: repeat(auto);
  row-gap: 1px;
  padding: 0;
  margin: 0 10px;
  background-color: hsl(186 50% 90% / 1);
}
</style>
