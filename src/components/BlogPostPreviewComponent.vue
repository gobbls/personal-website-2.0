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
    <RouterLink class="wrapper" :to="{ name: 'destination.show', params: { post: postUrl } }">
      <img :src="prevImgUrl" />
    </RouterLink>
    <div>
      <h2 class="title">{{ title }}</h2>
      <span class="dateOfPosting"><i class="bi bi-calendar"></i> {{ dateOfPosting }}</span>
      <span class="dateOfLastEdit" v-if="dateOfLastEdit"> / <span>{{ dateOfLastEdit }}</span></span>
      <BlogPostTagsComponent :tags="tags" />
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>


<style scoped>
div.single-preview {
  display: flex;
  padding: 30px 0;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  background-color: var(--base);
  color: var(--text);
  opacity: 1;
}

div.single-preview div {
  margin: auto 0;
}

h2 {
  margin-bottom: 10px;
}

/*
*a {
*  display: flex;
*  place-items: center;
*}
*/

img {
  max-width: 200px;
  border-radius: 1em;
}

span.dateOfLastEdit span {
  color: var(--leaf)
}

.dateOfPosting,
.dateOfLastEdit,
.description {
  opacity: 0.7;
}

div.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -moz-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media screen and (max-width: 500px) {
  div.single-preview {
    flex-wrap: wrap;
  }

  a.wrapper {
    width: 100%;
  }

  img {
    max-width: none;
    width: 100%;
  }
}
</style>
