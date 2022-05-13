import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RandomView from '../views/RandomView.vue'
import WatchListView from '../views/WatchListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: 'dh96s.netlify.app',
    name: 'home',
    component: HomeView
  },
  {
    path: 'dh96s.netlify.app/random',
    name: 'random',
    component: RandomView
  },
  {
    path: 'dh96s.netlify.app/watch-list',
    name: 'watch-list',
    component: WatchListView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
