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
    madeFor: Array,
    links: Object,
});

// In case a prop isn't able to spawn, write this instead.
const placeholder = 'No props passed yet'
</script>


<template>
    <div class="project-card">
        <div class="title">
            ({{ type || placeholder }})
            <h4>{{ title || placeholder }}</h4>
        </div>
        <div class="content" tabindex="-1">
            <div class="content-overflow">
                <div class="made-for">
                    {{ t('page.projects.madeFor') }} &nbsp;
                    <div class="platform" v-for="platform in madeFor">{{ platform }}</div>
                </div>
            </div>
            <ProjectIconsComponent :links="links" />
            <img :src="thumbnail" />
        </div>
    </div>
</template>


<style scoped>
h4 {
    margin: 0;
}

.project-card {
    max-width: 450px;
    margin: 10px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 5px;
    font-size: 0.9em;
}

.content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content>img {
    max-width: 100%;
    max-height: 100%;
    transition: filter ease-out var(--hover-off-phase);
}

.content-overflow {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
}

/*
 * TODO:
 * - Adjust font-size in 'made-for' when on smaller viewports.
 */

.made-for {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    background-color: black;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
    text-align: center;
    text-wrap: nowrap;
    z-index: 2;
    transition: transform ease-out var(--hover-off-phase);
}

.platform {
    margin: 2px;
    background-color: white;
    border-radius: 4px;
    padding: 0 3px;
    color: black;
}

@media (hover: hover) {
    .content:hover>img {
        filter: blur(5px);
        transition: filter ease-in var(--hover-on-phase);
    }

    .content:hover .made-for {
        transform: translateY(0%);
        transition: transform ease-in var(--hover-on-phase);
    }
}

@media screen and (min-width: 1280px) {
    .title {
        text-wrap: nowrap;
    }
}
</style>
