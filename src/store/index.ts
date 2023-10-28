import { fetchFromAPI } from '@/fetchFromAPI'
import { createStore } from 'vuex'

export default createStore({
  state: {
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
    async getVideos(context) {
      context.commit('changeVideosLoadingStatus')

      fetchFromAPI(`search?part=snippet&q=${context.state.sidebar.activeItem}&maxResults=50`)
      .then((data) => data.json())
      .then(response => {
        context.state.videos.content = response.items

        context.commit('changeVideosLoadingStatus', 'off')
      })
    },
  },
  modules: {}
})
