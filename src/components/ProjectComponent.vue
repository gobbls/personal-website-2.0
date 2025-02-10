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
    <div class="title flx-center">
      ({{ type }})
      <h4>{{ title }}</h4>
    </div>
    <div class="content flx-center" tabindex="-1">
      <img :src="thumbnail" />
      <ProjectIconsComponent :links="links" />
      <div class="made-for flx-center">
        <span>{{ t('page.projects.madeFor') }}</span>
        <div class="platform" v-for="platform in madeFor" :key="platform">
          <span :class="bsIcon(platform)"></span>
          {{ platform }}
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
div.project-card {
  max-width: 450px;
}

div.title {
  gap: 10px;
  margin-bottom: -5px;
  font-size: 0.9em;
}

div.content {
  position: relative;
  overflow: hidden;
}

div.content>img {
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
  transition: filter ease var(--hover-on-phase);
}

div.made-for {
  position: absolute;
  bottom: 0;
  transform: translateY(110%);
  flex-wrap: wrap;
  max-width: 85%;
  border-radius: 7px;
  padding: 2px;
  background-color: var(--text);
  color: var(--base);
  text-align: center;
  white-space: nowrap;
  transition: transform ease var(--hover-on-phase);
  user-select: none;
}

div.made-for>span {
  padding: 0 5px;
}

div.platform {
  border-radius: 6px;
  padding: 3px 7px;
  margin: 2px;
  background-color: var(--overlay);
  color: var(--text);
}

@media screen and (min-width: 1280px) {
  div.title {
    white-space:nowrap;
  }
}

@media screen and (max-width: 500px) {
  h4 {
    font-size: 5vw;
  }

  div.title {
    margin-bottom: -7px;
    font-size: 3vw;
  }

  div.made-for {
    padding: 0;
    font-size: 3vw;
  }
}

/* Cursor-specific devices */
@media (hover: hover) and (pointer: fine) {
  div.content:hover>img {
    filter: blur(5px);
  }

  div.content:hover div.made-for {
    transform: translateY(-10%);
  }
}

/* Mobile coverage. */
@media (hover: none) and (any-pointer: coarse) {
  div.content:focus-within>img {
    filter: blur(5px);
  }

  div.content:focus-within div.made-for {
    transform: translateY(-10%);
  }
}
</style>
