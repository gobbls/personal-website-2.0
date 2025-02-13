<script setup>
import TheProfileComponent from '@/components/TheProfileComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
</script>


<template>
  <TheProfileComponent />
  <div class="navigation-wrapper">
    <NavigationComponent />
  </div>
</template>


<style scoped>
/* Styling child component of this component */
div.navigation-wrapper :deep(.navigation) {
  display: flex;
  flex-direction: column;
}

div.navigation-wrapper :deep(a) {
  font-size: 1.5em;
  text-align: center;
}

div.navigation-wrapper :deep(.divider) {
  width: 100%;
  height: 1px;
  margin: 20px 0;
}
</style>
