import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/find',
      name: 'Find',
      component: () => import('./views/Find.vue'),
      meta: {
        title: '发现',
        keepAlive:false,
        showtar:true
      }
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('./views/News.vue'),
      meta: {
        title: '消息',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: () => import('./views/Mine.vue'),
      meta: {
        title: '我的',
        keepAlive:true,
        showtar:true
      }
    },
  ]
})
