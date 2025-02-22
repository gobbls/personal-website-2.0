<script setup>
const props = defineProps({
  tags: String,
});

// Formatted tags into array.
const fTags = props.tags.split(",");
</script>


<template>
  <div class="tags">
    <div v-for="tag in fTags" :key="tag">
      {{ tag }}
    </div>
  </div>
</template>


<style scoped>
div.tags {
  display: flex;
  gap: 5px;
}

.tags div {
  padding: 2px 7px;
  border-radius: 3em;
  background-color: var(--text);
  color: var(--base);
}
</style>
