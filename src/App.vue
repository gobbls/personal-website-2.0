<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';

const route = useRoute();

// Get the name of the current route.
// We don't want to show the navigationbar on the homepage (only).
const currentRouteName = computed(() => { return route.name; });
</script>


<template>
  <header v-if="currentRouteName != 'home'">
    <NavbarComponent />
  </header>
  <main>
    <RouterView />
  </main>
</template>
