import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Follow from  '@/components/Follow'
import Column from '@/components/Column'
import cache from '@/components/cache'

import Article from '@/components/Article .vue'
import users from '@/components/UserInfo.vue'
import detail from '@/components/users_detail.vue'
import mydetail from '@/components/mydetail.vue'
import devices from '@/components/devices.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  name: __dirname,
  scrollBehavior,
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
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/users',
      component: users
    },
    {
      path: '*',
      redirect: '/home'
    },

    {
      path: '/mydetail',
      component: mydetail
    },
    {
      path: '/devices',
      component: devices
    }

  ]
})
const scrollBehavior = (to, from, savedPosition) => {
  if(savedPosition){
    return savedPosition
  }else{
    return { x: 0, y: 0 }
  }
};
