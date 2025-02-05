<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<!-- 
    TODO:
    - Figure out how to close offcanvas AFTER clicking a router link.
    - Continue styling single-project component template.
-->

<template>
    <nav>
        <!-- Vue links for url-routing -->
        <RouterLink to="/">{{ t('navigation.home') }}</RouterLink>
        <RouterLink to="/projects">{{ t('navigation.projects') }}</RouterLink>
        <RouterLink to="/blog">{{ t('navigation.blog') }}</RouterLink>
        <RouterLink to="/contact">{{ t('navigation.contact') }}</RouterLink>
        <hr>
        <!-- External links -->
        <a href="https://github.com/MiiNK1Y" target="_blank">Github <i class="bi bi-box-arrow-up-right"></i></a>
        <a href="#" target="_blank">CV <i class="bi bi-box-arrow-up-right"></i></a>
    </nav>
</template>


<style scoped>
.navigation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

hr {
    color: white;
    height: 2px;
    width: 100%;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav a {
    width: fit-content;
    font-size: 1.5em;
    text-decoration: none;
}

nav a.router-link-exact-active {
    color: var(--text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}
</style>
