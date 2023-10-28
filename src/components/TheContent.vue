<template>
  <div class="wrapper">
    <div class="main">
      <Transition name="loader">
        <div
          v-if="getLoaderStatus()"
          class="main__loader"
        >
          <AppLoader />
        </div>
      </Transition>

      <div class="main__content">
        <AppVideoCard
          v-for="(video, id) in getVideos()"
          :key="id"
          :video="video"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppVideoCard from "./UI/AppVideoCard.vue";
import AppLoader from "./UI/AppLoader.vue";
import store from "@/store";

export default defineComponent({
  name: "HomeView",
  components: { AppVideoCard, AppLoader },
  data() {
    return {}
  },
  mounted() {
    store.dispatch('getVideos')
  },
  methods: {
    getVideos() {
      return store.getters.getVideosContent
    },
    getLoaderStatus() {
      return store.getters.getVideosLoaderStatus
    }
  }
});
</script>

<style lang="scss" scoped>
.loader-active,
.loader-active {
  transition: opacity 0.5s ease;
}

.loader-from,
.loader-to {
  opacity: 0;
}

.wrapper {
  background-color: rgb(4, 4, 4);
  width: 100%;
}

.main {
  position: relative;
  width: 100%;

  &__loader {
    position: fixed;
    top: 80px;
    left: 13vh;
    right: 0;
    bottom: 0px;
    background-color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
  }

  &__content {
  overflow-y: auto;
    padding: 20px;
    padding-left: 30px;
    width: 100%;
    display: grid;
    gap: 30px;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

</style>
