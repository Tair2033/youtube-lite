<template>
  <div class="wrapper">
    <div class="home">
      <div class="home__sidebar">
        <Transition name="sidebar">
          <TheSideBar v-if="getSidebarStatus()" />
        </Transition>
      </div>

      <div class="home__sidebar">
        <TheMainContent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheMainContent from "@/components/TheMainContent.vue";
import TheSideBar from "@/components/TheSideBar.vue";
import { defineComponent } from "vue";
import store from '@/store'

export default defineComponent({
  name: "HomeView",
  components: {
    TheSideBar,
    TheMainContent
  },
  methods: {
    getSidebarStatus() {
      return store.getters.getSidebarStatus
    }
  }
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  &__sidebar {
    background-color: rgb(4, 4, 4);
  }
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: transform 0.38s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
  transform: translateX(-100%);
}
</style>
