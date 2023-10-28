<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="sidebar__list">
        <ul class="sidebar__menu menu">
          <li
            v-for="(item, id) in menu"
            :key="id"
            class="menu__item"
            :class="{active: checkMenu(item.title)}"
            @click="changeMenuItem(item.title)"
          >
            <div class="menu__logo">
              <i
                class="fa-solid"
                :class="item.icon"
                style="color: #ffffff;"
              />
            </div>
            <div class="menu__title">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheSideBar',
  data() {
    return {
      menu: [
        { title: "New", icon: "fa-house" },
        { title: "Live", icon: "fa-headset" },
        { title: "Music", icon: "fa-music" },
        { title: "Movie", icon: "fa-film" },
        { title: "Gaming", icon: "fa-gamepad" },
        { title: "Fashion", icon: "fa-shirt" },
        { title: "Sport", icon: "fa-volleyball" },
      ]
    }
  },
  methods: {
    checkMenu(title: string) {
      return store.getters.getCurrentMenuItem == title ? true : false
    },
    changeMenuItem(title: string) {
      store.commit('changeMenuItem', title)

      store.dispatch('getVideos')
    }
  }
})

</script>

<style lang="scss" scoped>

.active {
  background-color: red;
}

.wrapper {
  position: fixed;
  border-right: 1px solid rgb(19, 19, 19);
  background-color: black;
  min-width: 200px;
  width: 13vw;
  z-index: 19;
}

.sidebar {
  height: 100vh;
  overflow-y: auto;
  &__list {}

  &__menu {}
}

.menu {
  padding-top: 120px;
  &__item {
    display: flex;
    margin: 4vh 20px;
    padding: 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s;
  }

  &__item:first-child {
    margin: 0;
    margin-left: 20px;
    margin-right: 20px;
  }

  &__item:hover {
    background-color: red;
  }

  &__logo {}

  &__title {
    margin-left: 15px;
    color: white;
    font-weight: 600;
  }
}

</style>