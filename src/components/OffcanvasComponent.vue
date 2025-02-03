<script setup>
import HomeNavigationComponent from '@/components/HomeNavigationComponent.vue';
</script>


<template>
    <button class="menu-button btn btn-primary" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i class="bi bi-list"></i>
    </button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <HomeNavigationComponent />
            </div>
        </div>
    </div>
</template>


<style scoped>
.menu-button {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: transparent;
    border-color: var(--text);
}

.offcanvas {
    color: var(--text);
    text-align: center;
    border: 1 solid white;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1),
        inset 0 0 150px rgba(255, 255, 255, 0.1);
    border-radius: 0 20px 20px 0;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7px);
}

.btn-close-white {
    opacity: 1;
    border-radius: 2em;
    border: 2px solid transparent;
    box-shadow: none;
}

.btn-close-white:active {
    box-shadow: none;
}

@media (hover :hover) {
    .btn-close-white:hover {
        border: 2px solid black;
        background-color: transparent;
    }
}
</style>
