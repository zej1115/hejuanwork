/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'
import General from '../pages/General/General.vue'
import Profile from '../pages/Profile/Profile.vue'
import Shop from "../pages/Shop/Shop.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode:"history",
  routes:[
    
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/general',
      component: General,
    },
    {
      path: '/shop',
      component: Shop,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
