<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
</script>


<template>
  <div class="navigation">
    <RouterLink to="/">{{ t('navigation.home') }}</RouterLink>
    <RouterLink to="/projects">{{ t('navigation.projects') }}</RouterLink>
    <RouterLink to="/blog">{{ t('navigation.blog') }}</RouterLink>
    <div class="divider"></div>
    <a class="external" href="https://github.com/MiiNK1Y" target="_blank">Github</a>
    <a class="external" href="Aleksander_N.Knoph_CV.pdf" target="_blank">CV</a>
  </div>
</template>


<style scoped>
/*
 * The default look of this component (made for the navbar).
 * It will be modified or overwritten by the parent components using it.
 */
div.navigation {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: auto;
  gap: 10px;
  font-size: 1.2em;
}

div.navigation a {
  padding: 0 10px;
}

div.navigation a.router-link-exact-active {
  color: var(--rose);
}

div.divider {
  width: 1px;
  height: inherit;
  margin: 0 10px;
  background-color: var(--text);
  opacity: 0.4;
}
</style>
