<script setup>
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';

const { t } = useI18n();
</script>


<template>
    <header>
        <NavbarComponent />
    </header>
    <main>
        <RouterView />
    </main>
</template>
