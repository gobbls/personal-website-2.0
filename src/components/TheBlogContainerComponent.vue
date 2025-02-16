<script setup>
import BlogPostPreviewComponent from "@/components/BlogPostPreviewComponent.vue"
import { ref, onMounted } from 'vue';

const allPostsApiEndpoint = "http://localhost:5000/blog/api/AllBlogPostsData";

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
  <div v-else="json">
    <div v-for="property in json" :key="property">
      <BlogPostPreviewComponent
        :title="property['title']"
        :tags="property['tags']"
        :dateOfPosting="property['date-of-posting']"
        :dateOfLastEdit="property['date-of-last-edit']"
        :description="property['description']"
        :postUrl="property['post-url']"
        :prevImgUrl="property['prev-img-url']"
      />
    </div>
  </div>
</template>
