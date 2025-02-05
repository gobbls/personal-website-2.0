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
        Browser: "bi bi-browser-firefox",
        Nettleser: "bi bi-browser-firefox"
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
            <img :src="thumbnail" />
            <ProjectIconsComponent :links="links" />
            <div class="made-for">
                <span>{{ t('page.projects.madeFor') }}</span>
                <div class="platform" v-for="platform in madeFor">
                    <span :class="bsIcon(platform)"></span>
                    {{ platform }}
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.project-card {
    max-width: 450px;
    margin: 11px;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;
    padding: 0 10px;
    margin-bottom: -5px;

    font-size: 0.9em;
}

.content {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.content>img {
    max-width: 100%;
    max-height: 100%;
    padding: 10px;

    transition: filter ease-out var(--hover-off-phase);
}

/*
 * TODO:
 * - Adjust font-size in 'made-for' when on smaller viewports.
 */

.made-for {
    position: absolute;
    z-index: 2;
    bottom: 0;
    transform: translateY(110%);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 85%;
    border-radius: 7px;
    padding: 2px;

    background-color: white;
    color: black;

    text-align: center;
    text-wrap: nowrap;

    transition: transform ease-out var(--hover-off-phase);
    user-select: none;
}

.made-for>span {
    padding: 0 5px;
}

.platform {
    border-radius: 6px;
    padding: 3px 7px;
    margin: 2px;

    background-color: black;
    color: white;
}

@media (hover: hover) {
    .content:hover>img {
        filter: blur(5px);
        transition: filter ease-in var(--hover-on-phase);
    }

    .content:hover .made-for {
        transform: translateY(-10%);
        transition: transform ease-in var(--hover-on-phase);
    }
}

@media screen and (min-width: 1280px) {
    .title {
        text-wrap: nowrap;
    }
}

@media screen and (max-width: 500px) {
    .project-card {
        margin: 0px;
        margin-bottom: 10px;
    }

    .content>img {
        padding: 10px;
    }

    .made-for {
        padding: 0;
        font-size: 3vw;
    }

    .title {
        margin-bottom: -7px;
        font-size: 3vw;
    }

    h4 {
        font-size: 5vw;
    }
}

/* Mobile coverage. */

@media (hover: none) {
    .content:focus>img {
        filter: blur(5px);
        transition: filter ease-in var(--hover-on-phase);
    }

    .content:focus .made-for {
        transform: translateY(-10%);
        transition: transform ease-in var(--hover-on-phase);
    }
}
</style>
