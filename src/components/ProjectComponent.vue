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
    <div class="project-card">
        <div class="title">
            <h6>({{ type || placeholder }})</h6>
            <h4>{{ title || placeholder }}</h4>
        </div>
        <div class="content" tabindex="-1">
            <div class="content-overflow">
                <div class="made-for">
                    <div class="made-for-blur"></div>
                    <span>{{ t('page.projects.madeFor') }} {{ madeFor }}</span>
                </div>
            </div>
            <ProjectIconsComponent :links="links" />
            <img :src="thumbnail" />
        </div>
    </div>
</template>


<style scoped>
h6,
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
    transition: filter ease var(--hover-off-phase);
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

.made-for {
    position: absolute;
    bottom: -40px;
    padding: 5px;
    background-color: black;
    text-align: center;
    border-radius: 5px;
    text-wrap: nowrap;
    z-index: 2;
    transition: bottom ease var(--hover-off-phase);
}

@media (hover: hover) {
    .content:hover>img {
        filter: blur(5px);
        transition: filter ease var(--hover-on-phase);
    }

    .content:hover .made-for {
        bottom: 0px;
        transition: bottom ease var(--hover-on-phase);
    }
}

@media screen and (min-width: 1280px) {
    .title {
        text-wrap: nowrap;
    }
}
</style>
