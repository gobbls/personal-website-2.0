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

// Get Bootstrap icons.
const bsIcon = (platform) => {
    const icon = {
        Linux: "bi bi-ubuntu",
        MacOS: "bi bi-apple",
        Windows: "bi bi-windows",
        Browser: "bi bi-browser-firefox"
    };

    return icon[platform];
};
</script>


<template>
    <div class="project-card">
        <div class="title">
            ({{ type || placeholder }})
            <h4>{{ title || placeholder }}</h4>
        </div>
        <div class="content" tabindex="-1">
            <ProjectIconsComponent :links="links" />
            <div class="content-overflow">
                <div class="made-for">
                    {{ t('page.projects.madeFor') }} &nbsp;
                    <div class="platform" v-for="platform in madeFor">
                        <span :class="bsIcon(platform)"></span>
                        {{ platform }}
                    </div>
                </div>
            </div>
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
    user-select: none;
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

@media screen and (max-width: 420px) {
    .made-for {
        font-size: 4vw;
    }
}

/* Mobile coverage. */

@media (hover: none) {
    .content:focus>img {
        filter: blur(5px);
        transition: filter ease-in var(--hover-on-phase);
    }

    .content:focus .made-for {
        transform: translateY(0%);
        transition: transform ease-in var(--hover-on-phase);
    }
}
</style>
