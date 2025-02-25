<script setup>
import BlogPostPreviewComponent from "@/components/BlogPostPreviewComponent.vue"
import { ref, onMounted } from 'vue';
import { blogBackendHost, blogBackend } from '../main.js';

const blogPostsEndpoint = blogBackend.endpoints.allPosts;
const blogPostsFetchErrorMsg = "Failed to fetch posts, the blog server might be down.";
const json = ref(null);

const getBlogPosts = async () => {
  try {
    const response = await fetch(blogPostsEndpoint);
    if (response.ok) {
      json.value = await response.json();
    } else {
      json.value = blogPostsFetchErrorMsg;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
onMounted(() => { getBlogPosts(); });
</script>


<template>
  <div class="container" v-if="json" v-for="property in json" :key="property">
    <BlogPostPreviewComponent
      :title="property['title']"
      :postUrl="property['post-url']"
      :tags="property['tags']"
      :dateOfPosting="property['date-of-posting']"
      :dateOfLastEdit="property['date-of-last-edit']"
      :description="property['description']"
      :prevImgUrl="blogBackendHost + property['preview-img-url']"
    />
  </div>
  <div v-else>
    <h3>loading posts...</h3>
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
