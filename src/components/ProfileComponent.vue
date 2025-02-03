<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>


<template>
    <div class="profile">
        <img src="../assets/portrait.jpg" />
        <p><i>"We're all <s>&nbsp;mad&nbsp;</s> minimalist here."<br>- the Cheshire Cat, probably...</i></p>
    </div>
</template>


<style scoped>
.profile {
    display: flex;
    flex-direction: column;
    place-items: center;
}

img {
    max-width: 150px;
    border-radius: 50%;
}

p {
    text-align: center;
    margin: 20px 0;
    font-size: 0.8em;
}
</style>
