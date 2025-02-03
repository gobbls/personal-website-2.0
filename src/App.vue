<script setup>
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';
import LanguageSwitcherComponent from './components/LanguageSwitcherComponent.vue';
import OffcanvasComponent from './components/OffcanvasComponent.vue';

const { t } = useI18n();
</script>


<template>
    <header>
        <OffcanvasComponent />
        <LanguageSwitcherComponent />
    </header>
    <main>
        <RouterView />
    </main>
</template>
