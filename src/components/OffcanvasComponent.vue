<script setup>
import NavigationComponent from '@/components/NavigationComponent.vue';
</script>


<template>
  <button class="menu-button btn btn-primary" type="button" data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <i class="bi bi-list"></i>
  </button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <!-- <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5> -->
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <div class="offcanvas-body flx-center">
      <LanguageSwitcherComponent />
      <NavigationComponent position="offcanvas" />
    </div>
  </div>
</template>


<style scoped>
button.menu-button {
  background-color: transparent;
  border-color: var(--text);
  margin: 10px;
}

div.offcanvas {
  border: 1 solid white;
  border-radius: 10px 0 0 10px;
  max-width: 200px;
  /*
  background-color: rgba(0, 0, 0, 0.2);
  */
  background-color: var(--base);
  color: var(--text);
  text-align: center;
  backdrop-filter: blur(7px);
}

div.offcanvas-body {
  height: 100%;
  text-align: center;
}

button.btn-close-white {
  position: absolute;
  top: 0;
  right: 0;
  border: 2px solid transparent;
  border-radius: 2em;
  margin: 10px;
  opacity: 1;
  box-shadow: none;
}

button.btn-close-white:active {
  box-shadow: none;
}

@media (hover :hover) {
  button.btn-close-white:hover {
    border: 2px solid black;
    background-color: transparent;
  }
}

/* Mobile coverage to hide offcanvas button when on desktop. */
@media screen and (min-width: 600px) {
  button.menu-button {
    display: none;
  }
}
</style>
