<!--
Make a single project render,
by getting paths from parent component
-->

<script setup>
import { useI18n } from 'vue-i18n';
import ProjectIconsComponent from '@/components/ProjectIconsComponent.vue';

const { t } = useI18n();

// Props to receive from parent spawning the individual projects.
const props = defineProps({
    title: String,
    type: String,
    thumbnail: String,
    madeFor: String,
    links: Object,
});

// In case a prop isn't able to spawn, write this instead.
const placeholder = 'No props passed yet'
</script>


<template>
    <div class="project-wrapper">
        <div class="title">
            <h6>{{ type || placeholder }}</h6>
            <h3> {{ title || placeholder }} </h3>
        </div>

        <div class="content">
            <div class="image-mask">
                <div class="made-for">
                    <!-- Somehow, get the 'made-for' text in here -->
                </div>
            </div>
            <div class="icons">
                <div class="icons-shadow"></div>
                <ProjectIconsComponent :links="links" />
            </div>
            <img :src="thumbnail" />
        </div>
    </div>
</template>


<style scoped>
img {
    max-width: 200px;
}
</style>
