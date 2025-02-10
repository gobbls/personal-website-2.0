<script setup>
import HomeNavigationComponent from '@/components/HomeNavigationComponent.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>


<template>
    <nav>
        <RouterLink to="/">{{ t('navigation.home') }}</RouterLink>
        <RouterLink to="/projects">{{ t('navigation.projects') }}</RouterLink>
        <RouterLink to="/blog">{{ t('navigation.blog') }}</RouterLink>
        <RouterLink to="/contact">{{ t('navigation.contact') }}</RouterLink>
        <a href="https://github.com/MiiNK1Y" target="_blank">Github <i class="bi bi-box-arrow-up-right"></i></a>
        <a href="Aleksander_N.Knoph_CV.pdf" target="_blank">CV <i class="bi bi-box-arrow-up-right"></i></a>
    </nav>
</template>


<style scoped>
nav {
  display: flex;
  margin-right: auto;
  margin-left: 5px;
}

nav a {
    text-decoration: none;
    color: var(--text);
    margin: 0 10px;
}

@media screen and (max-width: 600px) {
    nav {
        display: none;
    }
}
</style>
