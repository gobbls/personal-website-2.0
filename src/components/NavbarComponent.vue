<script setup>
import OffcanvasComponent from '@/components/OffcanvasComponent.vue';
import LanguageSwitcherComponent from '@/components/LanguageSwitcherComponent.vue';
</script>


<template>
    <div class="navbar">
        <OffcanvasComponent />
        <LanguageSwitcherComponent />
    </div>
</template>


<style scoped>
div.navbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    flex-wrap: nowrap;
    padding: 5px;
    background-color: darkslategray;
}
</style>
