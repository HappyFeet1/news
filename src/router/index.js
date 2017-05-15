import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Follow from  '@/components/Follow'
import Column from '@/components/Column'
import cache from '@/components/cache'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cache',
      component: cache
    },
    {
      path: '/follow',
      name: 'Follow',
      component: Follow
    },
    {
      path: '/column',
      name: 'Column',
      component: Column
    },
  ]
})
