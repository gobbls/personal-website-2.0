<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
import json from '../projects.json';

// Using the language modules to translate project specs.
const { t } = useI18n();

// The general, not language spesific data for each project.
const projects = ref(json);
</script>


<template>
    <div class="projects-wrapper flx-center">
        <div v-for="data in projects" :key="data">
            <ProjectComponent
                :title="data.title"
                :type="t(`page.projects.project.${data.title}.type`)"
                :thumbnail="data.thumbnail"
                :madeFor="$tm(`page.projects.project.${data.title}.madeFor`)"
                :links="data.links" />
        </div>
    </div>
</template>


<style scoped>
div.projects-wrapper {
    flex-wrap: wrap;
    gap: 15px;
}
</style>
