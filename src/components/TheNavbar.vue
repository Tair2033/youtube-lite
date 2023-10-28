<template>
  <div class="wrapper">
    <div class="navbar">
      <div class="navbar__logo">
        <div
          class="navbar__hamburger"
          @click="toggleSidebar"
        >
          <i
            class="fa-solid fa-bars"
            style="color: #ffffff;"
          />
        </div>
        <div class="navbar__logo-img">
          <router-link to="/">
            <img
              src="https://i.ibb.co/s9Qys2j/logo.png"
              alt="logo"
            >
          </router-link>
        </div>
      </div>

      <div class="navbar__search">
        <div class="navbar__search-input">
          <input
            type="text"
            placeholder="Search"
          >
        </div>
        <div class="navbar__search-btn">
          <button
            type="button"
            class="navbar__search-button"
          >
            <i class="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>

      <div class="navbar__rightside" />
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheNavbar',
  methods: {
    toggleSidebar() {
      store.commit('changeSidebarStatus')
    }
  }
})

</script>

<style lang="scss" scoped>
.wrapper {
  border-bottom: 1px solid rgb(19, 19, 19);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  font-family: 'Raleway', sans-serif;
  
  &__logo {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  &__hamburger {
    font-size: 30px;
    cursor: pointer;
  }

  &__logo-img {
    display: flex;
    margin-left: 15px;
  }

  &__logo-img img{
    max-width: 60px;
  }

  &__search {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px;
    border-radius: 20px;
  }

  &__search-input input {
    min-width: 350px;
    font-size: 18px;
    border: none;
    outline: none;
  }

  .navbar__search-button {
    border: none;
    cursor: pointer;
    background: none;
    border-radius: 20px;
    transition: all 0.4s;
  }

  .navbar__search-button:hover {
    color: orange;
  }

  .navbar__search-button i{
    font-size: 25px;
  }

  &__rightside {}
}
</style>