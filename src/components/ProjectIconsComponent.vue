<script setup>
const props = defineProps({
    links: Object,
});

const icon = (key) => {
    const icons = {
        visit: "icons/arrow.png",
        download: "icons/download.png",
        github: "icons/github.png",
        info: "icons/information.png"
    };

    return icons[key];
}
</script>


<template>
    <div class="icons">
        <div class="icons-shadow"></div>
        <div class="icon" v-for="(value, key) in links">
            <a tabindex="-1" :href="links[key]" target="_blank"><img :src="icon(key)" /></a>
            <div class="hover-bar"></div>
        </div>
    </div>
</template>


<style scoped>
.icons {
    position: absolute;
    opacity: 0;
    width: fit-content;
    margin: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    pointer-events: auto;
    z-index: 1;
    transition: opacity ease-out var(--hover-off-phase);
}

.icon {
    max-width: 70px;
    z-index: 3;
    transition: max-width ease-out var(--hover-off-phase);
    pointer-events: none;
}

.icon img {
    max-width: 100%;
    max-height: 100%;
}

.icons-shadow {
    position: absolute;
    width: 80%;
    margin-top: 20px;
    box-shadow: 0 0 40px 50px #000000ea;
    z-index: 2;
}

.hover-bar {
    opacity: 0;
    margin: 0 auto;
    width: 10%;
    height: 5px;
    border-radius: 3px;
    margin-top: 5px;
    background-color: white;
    transition: all ease-out var(--hover-off-fast-phase);
}

@media (hover: hover) {

    /* Override Bootstrap link-opacity */
    a:hover {
        opacity: 1;
    }

    .content:hover .icons {
        opacity: 1;
        transition: opacity ease-in var(--hover-on-phase);
    }

    .content:hover .icon {
        max-width: 80px;
        transition: max-width ease-in var(--hover-on-phase);
        pointer-events: auto;
    }

    .icon:hover .hover-bar {
        opacity: 1;
        width: 100%;
        transition: all ease-in var(--hover-on-fast-phase);
    }
}

/* Mobile coverage. */

@media (hover: none) {
    .content:focus .icons {
        opacity: 1;
        transition: opacity ease-in var(--hover-on-phase);
    }

    .content:focus .icon {
        max-width: 80px;
        transition: max-width ease-in var(--hover-on-phase);
        pointer-events: auto;
    }
}
</style>
