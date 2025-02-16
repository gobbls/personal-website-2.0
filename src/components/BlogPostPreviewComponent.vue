<script setup>
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
    <h3 class="title">{{ title }}</h3>
    <div class="tags">{{ tags }}</div>
    <div class="dateOfPosting">{{ dateOfPosting }}</div>
    <div class="dateOfLastEdit">{{ dateOfLastEdit }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>


<style scoped>
div.single-preview {
  background-color: var(--love);
  color: var(--base);
  padding: 10px;
}

h3 {
  background-color: var(--pine);
}
</style>
