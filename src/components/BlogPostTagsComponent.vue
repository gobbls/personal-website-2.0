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
  padding: 10px 0;
}

div.tags div {
  padding: 0 7px;
  border-radius: 3em;
  background-color: var(--muted);
  color: var(--base);
  font-size: 0.9em;
}
</style>
