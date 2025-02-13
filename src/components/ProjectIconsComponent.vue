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
  <div class="icons flx-center">
    <div class="icons-shadow"></div>
    <div class="icon" v-for="(value, key) in links" :key="key">
      <a tabindex="-1" :href="links[key]" target="_blank"><img :src="icon(key)" /></a>
      <div class="hover-bar"></div>
    </div>
  </div>
</template>


<style scoped>
div.icons {
  position: absolute;
  column-gap: 20px;
  width: fit-content;
  opacity: 0;
  margin: 0 30px 20px 30px;
  transition: opacity ease var(--hover-on-phase);
  pointer-events: none;
}

div.icon {
  z-index: 1;
  max-width: 70px;
  transition: max-width ease var(--hover-on-phase);
}

div.icon img {
  max-width: 100%;
  max-height: 100%;
}

div.icons-shadow {
  position: absolute;
  width: 80%;
  margin-top: 20px;
  box-shadow: 0 0 40px 50px #000000D9;
}

div.hover-bar {
  height: 5px;
  width: 10%;
  border-radius: 3px;
  opacity: 0;
  margin: 5px auto 0 auto;
  background-color: var(--text);
  transition: all ease var(--hover-off-fast-phase);
}

/* Cursor-specific devices */
@media (hover: hover) and (any-pointer: fine) {

  /* Override Bootstrap link-opacity */
  a:hover {
    opacity: 1;
  }

  div.content:hover div.icons {
    opacity: 1;
    pointer-events: auto;
  }

  div.content:hover div.icon {
    max-width: 80px;
    pointer-events: auto;
  }

  div.icon:hover div.hover-bar {
    width: 100%;
    opacity: 1;
  }
}

/* Mobile coverage. */
@media (hover: none) and (pointer: coarse) {
  div.content:focus-within .icons {
    opacity: 1;
    pointer-events: auto;
  }

  div.content.content:focus-within .icon {
    max-width: 80px;
  }
}
</style>
