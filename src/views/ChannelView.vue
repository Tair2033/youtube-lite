<template>
  <div class="wrapper">
    {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import AppLoader from "./UI/AppLoader.vue";
// import store from "@/store";

export default defineComponent({
  name: "ChannelView",
  data() {
    return {}
  },
  methods: {
   
  }
});
</script>


<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  background-color: rgb(7, 7, 7);
  padding-top: 100px;
}
</style>