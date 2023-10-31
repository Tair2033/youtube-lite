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

        <router-link to="/">
          <div class="navbar__link">
            <div class="navbar__link-img">
              <img
                src="https://i.ibb.co/s9Qys2j/logo.png"
                alt="logo"
              >
            </div>

            <div class="navbar__title">
              Youtube Lite
            </div>
          </div>
        </router-link>
      </div>

      <div class="navbar__search">
        <div class="navbar__search-input">
          <input
            v-model="searchRequest.text"
            type="text"
            placeholder="Search"
            @keydown="searchVideosKeyboard"
          >
        </div>
        <div class="navbar__search-btn">
          <button
            type="button"
            class="navbar__search-button"
            @click="searchVideos()"
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
  data() {
    return {
      searchRequest: {
        text: ""
      }
    }
  },
  methods: {
    searchVideos() {
      if (this.searchRequest.text.length != 0) {
        store.dispatch('searchVideos', this.searchRequest.text.trim())
        window.scrollTo({
          top: 0
        })
      }
    },
    searchVideosKeyboard(e: KeyboardEvent) {
      if (this.searchRequest.text.length != 0 && e.key == "Enter") {
        store.dispatch('searchVideos', this.searchRequest.text.trim())
        window.scrollTo({
          top: 0
        })
      }
    },
    toggleSidebar() {
      store.commit('changeSidebarStatus')
    }
  }
})

</script>

<style lang="scss" scoped>
.wrapper {
  border-bottom: 1px solid rgb(19, 19, 19);
  width: 100%;
  z-index: 20;
  position: fixed;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: black;
  font-family: 'Raleway', sans-serif;

  &__title {
    color: white;
    margin-left: 10px;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.4s;
  }

  &__link {
    display: flex;
    align-items: center;
  }
  
  &__logo {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  &__logo a {
    text-decoration: none;
  }

  &__logo a:hover {
    .navbar__title {
      color: red;
    }
  }

  &__hamburger {
    font-size: 30px;
    cursor: pointer;
  }

  &__link-img {
    display: flex;
    margin-left: 15px;
  }

  &__link-img img{
    max-width: 60px;
  }

  &__search {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px;
    margin-right: 200px;
    border-radius: 20px;
  }

  &__search-input input {
    min-width: 350px;
    font-size: 18px;
    border: none;
    outline: none;
  }

  &__search-button {
    border: none;
    background: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.4s;
  }

  &__search-btn {
    cursor: pointer;
  }

  &__search-btn:hover {
    i {
      color: orange;
    }
  }

  &__search-button i{
    font-size: 25px;
  }

  &__rightside {}
}
</style>