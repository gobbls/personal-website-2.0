<script setup>
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';

const { locale } = useI18n();

const setLanguage = (newLang) => {
    locale.value = newLang;
    localStorage.setItem("lang", newLang);
};

watchEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
        locale.value = storedLang;
    }
});

const { t } = useI18n();
</script>


<template>
  <div class="language-switch dropdown" data-bs-theme="dark">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown"
      aria-expanded="false">
      <i class="bi bi-globe"></i>
      {{ t('language') }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
      <li><a class="dropdown-item" @click="setLanguage('en')">English</a></li>
      <li><a class="dropdown-item" @click="setLanguage('no')">Norsk</a></li>
    </ul>
  </div>
</template>


<style scoped>
button.btn {
  font-size: 1.2rem;
  border-color: transparent;
  transition: color ease-in-out var(--hover-on-phase);
}

ul.dropdown-menu {
  min-width: fit-content;
  padding: 7px;
  background-color: var(--base);
  font-size: 1.2rem;
}

a.dropdown-item {
  transition: none;
}

button.btn:active {
  border-color: transparent;
}

@media screen and (max-width: 599px) {
  button.btn {
    display: none;
  }
}

@media (hover: hover) {
  button.btn:hover {
    color: var(--leaf);
  }

  a.dropdown-item:hover {
    border-radius: 5px;
    background-color: var(--leaf);
    color: var(--base);
    cursor: pointer;
    user-select: none;
  }
}
</style>
