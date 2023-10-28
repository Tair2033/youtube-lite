<template>
  <TheNavbar />
  <Transition name="router">
    <router-view />
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavbar from './components/TheNavbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheNavbar
  }
})

</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;box-sizing: border-box;
}

body {
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
}

.router-active,
.router-active {
  transition: opacity 0.5s ease;
}

.router-from,
.router-to {
  opacity: 0;
}
</style>
