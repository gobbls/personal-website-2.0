<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>


<template>
  <NavigationComponent position="home" />
</template>


<style scoped>
hr {
  height: 2px;
  width: 100%;
  color: var(--text);
}

nav {
  flex-direction: column;
}

nav a {
  font-size: 1.5em;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--text);
}
</style>
