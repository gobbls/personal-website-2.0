<!--
  FIX:
  - Fix language button in offcanvas.
  - Fix navbar showing on home.
  - Fix offcanvas not closing after clicking on route / link.
  - Fix project icons 'reloading' when getting back from a different tab / window.
  TODO:
  - Add back-button and 'current-page / path' -name beside said button for navigation hint.
  - Add profile-picture fading in when hovering over name on homescreen.
  - Add blog components.
    - Figure out best way to go about the template format for writing (markdown parser?).
  - General cleanup in codebase.
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
