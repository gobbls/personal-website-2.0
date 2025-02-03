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
        <div v-for="(value, key) in links">
            <a tabindex="-1" :href="links[key]"><img :src="icon(key)" /></a>
        </div>
    </div>
</template>


<style scoped>
.icons {
    display: flex;
}

.icons img {
    max-width: 20px;
}
</style>
