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
    width: fit-content;
    margin: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
}

.icon {
    max-width: 80px;
    max-height: 80px;
    z-index: 2;
}

.icon img {
    max-width: 100%;
    max-height: 100%;
}

.icons-shadow {
    position: absolute;
    width: 80%;
    margin-top: 20px;
    box-shadow: 0 0 40px 60px #000000ea;
    z-index: 1;
}

.hover-bar {
    opacity: 0;
    width: 100%;
    height: 5px;
    border-radius: 3px;
    margin-top: 5px;
    background-color: white;
}

@media (hover: hover) {
    .icon:hover .hover-bar {
        opacity: 1;
    }
}
</style>
