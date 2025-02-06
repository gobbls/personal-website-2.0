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
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    width: fit-content;
    opacity: 0;
    margin: 0 30px 20px 30px;

    transition: opacity ease-out var(--hover-off-phase);
    pointer-events: none;
}

.icon {
    z-index: 3;
    max-width: 70px;

    transition: max-width ease-out var(--hover-off-phase);
}

.icon img {
    max-width: 100%;
    max-height: 100%;
}

.icons-shadow {
    position: absolute;
    z-index: 2;

    width: 80%;
    margin-top: 20px;

    box-shadow: 0 0 40px 50px #000000ea;
}

.hover-bar {
    height: 5px;
    width: 10%;
    border-radius: 3px;
    opacity: 0;
    margin: 0 auto;
    margin-top: 5px;

    background-color: white;

    transition: all ease-out var(--hover-off-fast-phase);
}

/* Cursor-specific devices */

@media (hover: hover) and (pointer: fine) {

    /* Override Bootstrap link-opacity */
    a:hover {
        opacity: 1;
    }

    .content:hover .icons {
        opacity: 1;
        transition: opacity ease-in var(--hover-on-phase);
        pointer-events: auto;
    }

    .content:hover .icon {
        max-width: 80px;
        transition: max-width ease-in var(--hover-on-phase);
        pointer-events: auto;
    }

    .icon:hover .hover-bar {
        width: 100%;
        opacity: 1;
        transition: all ease-in var(--hover-on-fast-phase);
    }
}

/* Mobile coverage. */

@media (hover: none) and (any-pointer: coarse) {
    .content:focus-within .icons {
        opacity: 1;
        transition: opacity ease-in var(--hover-on-phase);
        pointer-events: auto;
    }

    .content.content:focus-within .icon {
        max-width: 80px;
        transition: max-width ease-in var(--hover-on-phase);
    }
}
</style>
