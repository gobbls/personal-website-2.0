<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';
import LanguageSwitcherComponent from '@/components/LanguageSwitcherComponent.vue';

const route = useRoute();
// Get the name of the current route.
// We don't want to show the navigationbar on the homepage (only).
const currentRouteName = computed(() => { return route.name; });
</script>


<template>
  <header>
    <NavbarComponent />
    <div class="langSwitchHome">
      <LanguageSwitcherComponent />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>


<style scoped>
.langSwitchHome {
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>
