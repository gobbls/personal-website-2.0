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
div.language-switch {
    position: absolute;
    top: 20px;
    right: 20px;
}

button.btn {
    font-size: 1.2rem;
}

ul.dropdown-menu {
    min-width: fit-content;
    padding: 7px;
    background-color: var(--base);
    font-size: 1.2rem;
}

a.dropdown-item:hover {
    border-radius: 5px;
    background-color: var(--text);
    color: var(--base);
    text-shadow: 0 0 10px black;
    cursor: pointer;
    user-select: none;
}
</style>
