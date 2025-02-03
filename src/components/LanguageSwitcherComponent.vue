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
	<button class="btn dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
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
.language-switch {
	position: absolute;
	top: 20px;
	right: 20px;
}

.dropdown-menu {
	min-width: fit-content;
	background-color: transparent;
	padding: 7px;
}

.dropdown-item:hover {
	background-color: var(--text);
	color: var(--base);
	border-radius: 5px;
	text-shadow: 0 0 10px black;
	user-select: none;
	cursor: pointer;
}
</style>
