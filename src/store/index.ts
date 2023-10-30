import { fetchFromAPI } from '@/fetchFromAPI'
import { createStore } from 'vuex'

export default createStore({
  state: {
    currentVideoStatistic: [],
    suggestionVideos: [],
    videos: {
      isLoading: true,
      content: []
    },
    sidebar: {
      activeItem: 'New',
      isActive: true
    },
    menu: [
      { title: 'New', icon: 'fa-house' },
      { title: 'Live', icon: 'fa-headset' },
      { title: 'Music', icon: 'fa-music' },
      { title: 'Movie', icon: 'fa-film' },
      { title: 'Gaming', icon: 'fa-gamepad' },
      { title: 'Fashion', icon: 'fa-shirt' },
      { title: 'Sport', icon: 'fa-volleyball' }
    ]
  },
  getters: {
    getCurrentVideoStatistic(state) {
      return state.currentVideoStatistic
    },
    getSuggestionVideos(state) {
      return state.suggestionVideos
    },
    getVideosContent(state) {
      return state.videos.content
    },
    getCurrentMenuItem(state) {
      return state.sidebar.activeItem
    },
    getSidebarStatus(state) {
      return state.sidebar.isActive
    },
    getVideosLoaderStatus(state) {
      return state.videos.isLoading
    }
  },
  mutations: {
    changeSidebarStatus(state) {
      state.sidebar.isActive = !state.sidebar.isActive
    },
    changeVideosLoadingStatus(state, mode = 'default') {
      if (mode !== 'default') {
        state.videos.isLoading = false
        return
      }

      state.videos.isLoading = true
    },
    changeMenuItem(state, title = "New") {
      state.sidebar.activeItem = title;
    }
  },
  actions: {
    async searchVideos(context, searchRequest) {
      context.commit('changeVideosLoadingStatus')

      try {
        await fetchFromAPI(`search?part=snippet&q=${searchRequest}&maxResults=50`)
        .then((response) => response.json())
        .then(data => {
          context.state.videos.content = data.items

          console.log(data);

          context.commit('changeVideosLoadingStatus', 'off')
        })
      } catch (error) {
        console.log(error);
      }
    },
    async getVideos(context) {
      context.commit('changeVideosLoadingStatus')

      try {
        await fetchFromAPI(`search?part=snippet&q=${context.state.sidebar.activeItem}&maxResults=50`)
        .then((response) => response.json())
        .then(data => {
          context.state.videos.content = data.items

          console.log(data.items);

          context.commit('changeVideosLoadingStatus', 'off')
        })
      } catch (error) {
        console.log(error);
      }
    },
    async getRelatedVideos(context, videoId) {
      try {
        await fetchFromAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
        .then(r => r.json())
        .then(data => {
          context.state.suggestionVideos = data.items
        })
      } catch (error) {
        console.log(error);
      }
    },
    async getVideoStatistic(context, videoId) {
      try {
        await fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then(r => r.json())
        .then(data => {
          context.state.currentVideoStatistic = data.items[0];
        })
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
})
