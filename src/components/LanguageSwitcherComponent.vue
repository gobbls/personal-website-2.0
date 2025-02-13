<script setup>
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';

const { locale, t } = useI18n();

// Set the language key in localStorage.
const setLanguage = (newLang) => {
  locale.value = newLang;
  localStorage.setItem("lang", newLang);
};

// Observe when the key value changes in localStorage,
// triggering the reactive effect of changing the components language.
watchEffect(() => {
  const storedLang = localStorage.getItem("lang");
  if (storedLang) {
    locale.value = storedLang;
  }
});
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
div.language-switch {
  width: fit-content;
}

button.btn {
  border-color: transparent;
  transition: none;
  font-size: 1.2em;
}

ul.dropdown-menu {
  min-width: fit-content;
  padding: 7px;
  background-color: var(--base);
  font-size: 1.2em;
}

a.dropdown-item {
  transition: none;
}

/* Active for all platforms. */
button.btn:active {
  border-color: transparent;
}

a.dropdown-item:active {
  background-color: var(--leaf);
}

/* Active, if hover does not work.*/
@media (hover: none) and (pointer: coarse) {
  button.btn:active {
    color: var(--leaf);
  }

  button.btn:active,
  a.dropdown-item:active {
    border-radius: 5px;
    background-color: var(--leaf);
    color: var(--base);
    user-select: none;
  }
}

/* Hover stuff for devices with a cursor. */
@media (hover: hover) and (any-pointer: fine) {
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
