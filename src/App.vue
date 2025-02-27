<!--
  FIX:
  - Fix offcanvas not closing after clicking on route / link.
  - Fix project icons 'reloading' when getting back from a different tab / window.
  - Fix Chrome issues with project icons being clickable after focused, but not visible.
  TODO:
  - Add back-button and 'current-page / path' -name beside said button for navigation hint.
-->


<script setup>
import TheNavbarComponent from '@/components/TheNavbarComponent.vue';
import { RouterView } from 'vue-router';
</script>


<template>
  <header>
    <TheNavbarComponent />
  </header>
  <main>
    <RouterView />
  </main>
</template>
