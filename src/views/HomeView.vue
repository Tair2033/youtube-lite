<template>
  <div class="wrapper">
    <div class="home">
      <div class="home__sidebar">
        <Transition name="sidebar">
          <TheSideBar v-if="getSidebarStatus()" />
        </Transition>
      </div>

      <div
        class="home__content"
        :class="{'hideside': getSidebarStatus()}"
      >
        <TheContent />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TheContent from "@/components/TheContent.vue";
import TheSideBar from "@/components/TheSideBar.vue";
import { defineComponent } from "vue";
import store from '@/store'

export default defineComponent({
  name: "HomeView",
  components: {
    TheSideBar,
    TheContent
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
  background-color: rgb(4, 4, 4);

  &__sidebar {}

  &__content {
    width: 100%;
    margin-top: 90px;
    transition: all 0.4s;
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

.hideside {
  padding-left: 13vw;
}
</style>
