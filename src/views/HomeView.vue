<script setup>
import TheProfileComponent from '@/components/TheProfileComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
</script>


<template>
  <div class="mask">
    <img src="../assets/logo.png" />
  </div>
  <TheProfileComponent />
  <div class="navigation-wrapper">
    <NavigationComponent />
  </div>
</template>


<style scoped>
div.mask {
  z-index: -1;
  text-align: center;
  max-width: 400px;
  margin-top: -100px;
  margin-bottom: -200px;
  opacity: 0.3;
  mask-image: linear-gradient(var(--base), transparent);
}

img {
  max-width: 100%;
}

/* Styling child component of this component */
div.navigation-wrapper :deep(.navigation) {
  display: flex;
  flex-direction: column;
}

div.navigation-wrapper :deep(a) {
  z-index: 1;
  font-size: 1.5em;
  text-align: center;
}

div.navigation-wrapper :deep(.divider) {
  width: 100%;
  height: 1px;
  margin: 20px 0;
}

/* Hide 'Home' (the first navigation-element) from the home-navigation */
div.navigation-wrapper :deep(.navigation a:first-child) {
  display: none;
}
</style>
