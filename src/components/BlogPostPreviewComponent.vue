<script setup>
import BlogPostTagsComponent from "@/components/BlogPostTagsComponent.vue";

const props = defineProps({
  title: String,
  tags: String,
  dateOfPosting: String,
  dateOfLastEdit: String,
  description: String,
  postUrl: String,
  prevImgUrl: String
});

</script>


<template>
  <div class="single-preview">
    <a :href="postUrl"><img :src="prevImgUrl" /></a>
    <div>
      <h2 class="title">{{ title }}</h2>
      <BlogPostTagsComponent :tags="tags" />
      <div>
        <span class="dateOfPosting">Posted: {{ dateOfPosting }}</span>
        <span class="dateOfLastEdit">Updated: {{ dateOfLastEdit }}</span>
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>


<style scoped>
div.single-preview {
  display: grid;
  grid-template-columns: auto auto;
  padding: 30px;
  background-color: var(--base);
  color: var(--text);
  opacity: 1;
}

div.single-preview div {
  margin: auto 0;
}

a img {
  max-width: 200px;
  max-height: 200px;
}

div.tags {
  width: fit-content;
  background-color: var(--base);
  color: var(--text);
}
</style>
