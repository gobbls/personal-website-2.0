<script setup>
import TheProfileComponent from '@/components/TheProfileComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
</script>


<template>
  <div class="img-container">
    <img src="/logo_faded.png" />
  </div>
  <TheProfileComponent />
  <div class="navigation-wrapper">
    <NavigationComponent />
  </div>
</template>


<style scoped>
div.img-container {
  width: 100%;
  margin-bottom: -10vh;
  text-align: center;
}

img {
  max-width: 100vw;
  max-height: 30vh;
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
