<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
import json from '../projects.json';

// Using the language modules to translate project specs.
const { t } = useI18n();

// The general, not language spesific data for each project
const projects = ref(json);
</script>


<template>
    <div class="projects-wrapper" v-for="data in projects">
        <ProjectComponent :title="data.title" :type="t(`page.projects.project.${data.title}`)"
            :thumbnail="data.thumbnail" :madeFor="t(`page.projects.project.${data.title}`)" :links="data.links" />
    </div>
</template>


<style scoped>
.projects-wrapper {
    padding: 10px;
}
</style>
