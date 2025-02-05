<!-- 
    TODO:
    - Figure out how to close offcanvas AFTER clicking a router link.
    - Change offcanvas width. 
-->

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <nav>
        <RouterLink to="/">{{ t('navigation.home') }}</RouterLink>
        <RouterLink to="/projects">{{ t('navigation.projects') }}</RouterLink>
        <RouterLink to="/blog">{{ t('navigation.blog') }}</RouterLink>
        <RouterLink to="/contact">{{ t('navigation.contact') }}</RouterLink>
        <hr>
        <a href="https://github.com/MiiNK1Y" target="_blank">Github <i class="bi bi-box-arrow-up-right"></i></a>
        <a href="Aleksander_N.Knoph_CV.pdf" target="_blank">CV <i class="bi bi-box-arrow-up-right"></i></a>
    </nav>
</template>


<style scoped>
hr {
    height: 2px;
    width: 100%;
    color: var(--text);
}

nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

nav a {
    font-size: 1.5em;
    text-decoration: none;
    text-shadow: 0px 0px 30px black,
        0px 0px 30px black;
}

nav a.router-link-exact-active {
    color: var(--text);
}
</style>
