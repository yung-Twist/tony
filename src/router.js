import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        keepAlive:true,
        showtar:true
      }
    },
    {
      path: '/location',
      name: 'Location',
      component: () => import('./views/home/location/Location.vue'),
      meta: {
        title: '选择定位',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/find',
      name: 'Find',
      component: () => import('./views/find/Find.vue'),
      meta: {
        title: '发现',
        keepAlive:false,
        showtar:true
      }
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('./views/news/News.vue'),
      meta: {
        title: '消息',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('./views/mine/Mine.vue'),
      meta: {
        title: '我的',
        keepAlive:true,
        showtar:true
      }
    },
  ]
})
