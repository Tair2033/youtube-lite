import { createStore } from "vuex";

export default createStore({
  state: {
    sidebar: {
      isActive: true
    }
  },
  getters: {
    getSidebarStatus(state) {
      return state.sidebar.isActive
    }
  },
  mutations: {
    changeSidebarStatus(state) {
      state.sidebar.isActive = !state.sidebar.isActive
    }
  },
  actions: {},
  modules: {},
});
