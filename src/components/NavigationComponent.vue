<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const props = defineProps({ position: String, reqired: true });
// Stack the routes horizontaly if 'navbar'.
const isNavbar = props.position === 'navbar';
// Stack the routes verticaly if 'home'.
const isHome = props.position === 'home';
// Add 'home' if the position is inside 'offcanvas'.
const isOffcanvas = props.position === 'offcanvas';
</script>


<template>
  <div :class="{ navHorizontal: isNavbar, navVertical: isHome | isOffcanvas }">
    <RouterLink to="/" v-if="!isHome">{{ t('navigation.home') }}</RouterLink>
    <RouterLink to="/projects">{{ t('navigation.projects') }}</RouterLink>
    <RouterLink to="/blog">{{ t('navigation.blog') }}</RouterLink>
    <div class="divider"></div>
    <a class="external" href="https://github.com/MiiNK1Y" target="_blank">Github</a>
    <a class="external" href="Aleksander_N.Knoph_CV.pdf" target="_blank">CV</a>
  </div>
</template>


<style scoped>
div.divider {
  background-color: var(--text);
  opacity: 0.4;
}

div.navHorizontal {
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-right: auto;
}

div.navHorizontal > a {
  font-size: 1.2em;
  margin: 0 10px;
}

div.navHorizontal > .divider {
  width: 1px;
  height: inherit;
  margin: 0 10px;
}

div.navVertical {
  display: flex;
  flex-direction: column;
}

div.navVertical > a {
  font-size: 1.5em;
  text-align: center;
}

div.navVertical > .divider {
  width: 100%;
  height: 1px;
  margin: 20px 0;
}

@media screen and (max-width: 600px) {
  div.navHorizontal {
    display: none;
  }
}
</style>
