<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
const props = defineProps({ position: String, reqired: true });
// Get the name of the current route.
// We don't want to show the navigationbar on the homepage (only).
const currentRouteName = computed(() => { return route.name; });
// Stack the routes horizontaly if 'navbar'.
const isNavbar = props.position === 'navbar';
// Stack the routes verticaly if 'home'.
const isHome = props.position === 'home';
</script>


<template>
  <div :class="{ navHorizontal: isNavbar, navVertical: isHome}">
    <RouterLink to="/" v-if="currentRouteName != 'home'">{{ t('navigation.home') }}</RouterLink>
    <RouterLink to="/projects">{{ t('navigation.projects') }}</RouterLink>
    <RouterLink to="/blog">{{ t('navigation.blog') }}</RouterLink>
    <hr v-if="isHome">
    <a class="external" href="https://github.com/MiiNK1Y" target="_blank">Github <i class="bi bi-box-arrow-up-right"></i></a>
    <a class="external" href="Aleksander_N.Knoph_CV.pdf" target="_blank">CV <i class="bi bi-box-arrow-up-right"></i></a>
  </div>
</template>


<style scoped>
div.navHorizontal {
  display: flex;
  flex-direction: row;
}

div.navVertical {
  display: flex;
  flex-direction: column;
}

div.navVertical > a {
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
}
</style>
