<template>
  <div class="videocard">
    <router-link
      :to="`/video/${video.id.videoId}`"
      class="wrapper"
    >
      <div class="card">
        <div class="card__image">
          <img
            :src="checkImage()"
            alt="preview"
          >
        </div>
        <div class="card__bottom">
          <div class="card__bottom-title">
            {{ video?.snippet.title.slice(1, 70) }}...
          </div>
          <div class="card__bottom-channel">
            <router-link :to="`/channel/${video?.snippet?.channelId}`">
              {{ video?.snippet.channelTitle }}
            </router-link>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheSideBar',
  props: {
    video: {
      type: Object,
      default: new Object()
    }
  },
  data() {
    return {

    }
  },
  methods: {
    checkImage() {
      if (this.video?.snippet?.thumbnails?.medium?.url == "") {
        return "../../../public/noimg.jpg"
      }

      return this.video?.snippet?.thumbnails?.medium?.url
    }
  }
})

</script>

<style lang="scss" scoped>
.videocard {
}

.wrapper {
  text-decoration: none;
}

.card {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  transition: all 0.4s;
  padding-bottom: 10px;
  margin-bottom: 5px;

  &__image {
    display: flex;
    object-fit: cover;
    border-radius: 10px;
    height: 150px;
    min-width: 260px;
  }

  &__image img{
    border-radius: 10px;
    width: auto;
    height: auto;
    padding: 3px;
  }

  &__bottom {
    padding: 10px 10px 0 10px;
  }

  &__bottom-title {
    margin-top: 5px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    overflow: hidden;
    transition: all 0.34s;
  }

  &__bottom-channel a{
    display: block;
    text-decoration: none;
    color: white;
    font-weight: 500;
    margin-top: 15px;
    color: rgb(151, 151, 151);
    transition: all 0.4s;
  }

  &__bottom-channel a:hover {
    color: rgb(107, 107, 107);
  }
}

.card:hover {
  background-color: rgb(11, 11, 11);
}
</style>