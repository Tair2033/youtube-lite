<template>
  <div class="wrapper">
    <div class="video">
      <div class="video__left">
        <div class="video__content">
          <iframe
            class="video__content-video"
            :src="`https://www.youtube.com/embed/${$route.params.id}?si=kGuBCy6MZ9y8kDZM&amp`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        </div>

        <div class="video__maintitle">
          {{ statistic.title }}
        </div>

        <div class="video__statistic">
          <div class="video__channel">
            <div class="video__channel-title">
              <router-link :to="`/channel/${statistic.channelId}`">
                {{ statistic.channelTitle }}
              </router-link>
            </div>
          </div>
          <div class="video__stats">
            <div class="video__opinion">
              <div class="video__likes">
                <div class="video__likes-icon">
                  <i
                    class="fa-solid fa-thumbs-up"
                  />
                </div>
                <div class="video__likes-count">
                  {{ statistic.likesCount }}
                </div>
              </div>
              <div class="video__dislikes">
                <div class="video__dislikes-icon">
                  <i
                    class="fa-solid fa-thumbs-down"
                  />
                </div>
              </div>
            </div>

            <div class="video__share">
              <div class="video__share-icon">
                <i class="fa-solid fa-share" />
              </div>
              <span class="video__share-follow">
                Share
              </span>
            </div>
          </div>
        </div>

        <!-- <div class="video__description">
          {{ statistic.description }}
        </div> -->
      </div>

      <div class="video__right">
        <div class="video__title">
          More videos
        </div>

        <div class="video__suggestions">
          <div
            v-if="false"
            class="video__suggestions-loader"
          >
            <AppLoader />
          </div>

          <div class="video__suggestions-suggestion">
            <AppVideoSuggestion
              v-for="(video, id) in getVideos()"
              :key="id"
              :video="video"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLoader from "@/components/UI/AppLoader.vue";
import AppVideoSuggestion from "@/components/UI/AppVideoSuggestion.vue";
import store from "@/store";

export default defineComponent({
  name: "HomeView",
  components: { AppVideoSuggestion, AppLoader },
  data() {
    return {
      statistic: {
        videoId: 0,
        title: "",
        description: "",
        viewCount: 0,
        likesCount: 0,
        dislikesCount: "",
        channelTitle: "",
        channelId: 0
      } as any
    }
  },
  mounted() {
    store.dispatch('getRelatedVideos', this.$route.params.id);
    store.dispatch('getVideoStatistic', this.$route.params.id);

    this.getStatistic();
  },
  methods: {
    getStatistic() {
      const data = store.getters.getCurrentVideoStatistic

      console.log(data);

      this.statistic = {
        videoId: data?.id,
        title: data?.snippet?.title,
        description: data?.snippet?.description,
        channelTitle: data?.snippet?.channelTitle,
        channelId: data?.snippet?.channelId,
        likesCount: data?.statistics?.likeCount,
        dislikeCount: "",
        viewCount: data?.statistics?.viewCount
      }
    },
    getVideos() {
      return store.getters.getSuggestionVideos
    },
    getLoaderStatus() {
      return store.getters.getVideosLoaderStatus
    }
  }
});
</script>


<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  background-color: rgb(7, 7, 7);
  padding-top: 110px;
  padding-left: 50px;
}

.video {
  background-color: rgb(7, 7, 7);
  display: flex;

  &__left {
    height: 100%;
  }

  &__maintitle {
    font-size: 24px;
    font-weight: 500;
    color: white;
    margin-top: 20px;
  }

  &__statistic {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    transition: all 0.4s;
  }

  &__channel {}

  &__channel-title {

  }

  &__channel-title a {
    text-decoration: none;
    font-size: 30px;
    color: rgb(112, 112, 112);
    font-weight: 600;
  }

  &__channel-title a:hover {
    color: rgb(125, 124, 124);
  }

  &__stats {
    display: flex;
    align-items: center;
  }

  &__opinion {
    color: white;
    background-color: rgb(31, 31, 31);
    border-radius: 15px;
    font-size: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  &__likes {
    display: flex;
    align-items: center;
    margin-right: 0;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.4s;
  }

  &__likes:hover {
    background-color: rgb(36, 36, 36);
    i {
      color: red;
    }
  }

  &__likes-icon i{
    font-size: 22px;
    color: white;
    margin-right: 5px;
  }

  &__likes-count {}

  &__dislikes {
    transition: all 0.4s;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    cursor: pointer;
  }

  &__dislikes:hover {
    background-color: rgb(36, 36, 36);
    i {
      color: rgb(17, 16, 16);
    }
  }

  &__dislikes-icon {
    transform: rotateZ(180deg) rotateX(180deg);
    cursor: pointer;
    i {
      font-size: 22px;
      color: white;
    }
  }

  &__share {
    transition: all 0.4s;
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 15px;
    background-color: rgb(31, 31, 31);
  }

  &__share:hover{
    background-color: rgb(36, 36, 36);
    i {
      color: rgb(255, 0, 0);
    }
  }

  &__share-follow {
    color: white;
    font-size: 22px;
    font-weight: 500;
    margin-left: 10px;
  }

  &__share-icon i{
    font-size: 22px;
    color: white;
  }

  &__content {
    height: 70vh;
    width: 65vw;
  }

  &__content-video {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }

  &__right {
    width: 35vw;
    margin-left: 25px;
    margin-right: 25px;
  }

  &__title {
    color: white;
    font-size: 20px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  &__suggestions-loader {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__suggestions {
    position: relative;
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 1470px) {
  .video {
    flex-direction: column;
  }

  .video__content {
    width: 100%;
  }

  .wrapper {
    padding: 20px;
  }
}
</style>
