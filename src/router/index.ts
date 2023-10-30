import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideoView from '../views/VideoView.vue'
import ChannelView from '../views/ChannelView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/video/:id',
    name: 'video',
    component: VideoView
  },
  {
    path: '/channel/:id',
    name: 'channel',
    component: ChannelView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(route => {
  window.scrollTo({
    top: 0
  })
})

export default router
