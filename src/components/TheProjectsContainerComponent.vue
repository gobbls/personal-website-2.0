<script setup>
import ProjectComponent from '@/components/ProjectComponent.vue';
import json from '../projects.json';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { t } = useI18n();    // Using the language modules to translate project specs.
const projects = ref(json); // The general, not language spesific data for each project.
</script>


<template>
  <div class="projects-wrapper flx-center">
    <div v-for="data in projects" :key="data">
      <ProjectComponent
        :title="data.title"
        :type="t(`page.projects.project.${data.title}.type`)"
        :thumbnail="data.thumbnail"
        :madeFor="$tm(`page.projects.project.${data.title}.madeFor`)"
        :links="data.links"
      />
    </div>
  </div>
</template>


<style scoped>
div.projects-wrapper {
  flex-wrap: wrap;
  gap: 15px;
}
</style>
