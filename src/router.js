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
      path: '/testPage',
      name: 'TestPage',
      component: () => import('./views/TestPage'),
      meta: {
        title: '测试页',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/homeSearchPage',
      name: 'HomeSearchPage',
      component: () => import('./views/home/search/HomeSearchPage.vue'),
      meta: {
        title: '搜索',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/classifyStore',
      name: 'ClassifyStore',
      component: () => import('./views/home/classify/ClassifyStore.vue'),
      meta: {
        title: '商户',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/storeDetailInfo',
      name: 'StoreDetailInfo',
      component: () => import('./views/home/store/StoreDetailInfo.vue'),
      meta: {
        title: '商户信息',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/storeDetail',
      name: 'StoreDetail',
      component: () => import('./views/home/store/StoreDetail.vue'),
      meta: {
        title: '店铺详情',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/storeDetailGoodsInfo',
      name: 'StoreDetailGoodsInfo',
      component: () => import('./views/home/store/StoreDetailGoodsInfo.vue'),
      meta: {
        title: '商品详情',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/storeTonyDetail',
      name: 'StoreTonyDetail',
      component: () => import('./views/home/store/StoreTonyDetail.vue'),
      meta: {
        title: '发型师详情',
        keepAlive:true,
        showtar:false
      }
    },
    {
      path: '/storeBuyTicket',
      name: 'StoreBuyTicket',
      component: () => import('./views/home/store/StoreBuyTicket.vue'),
      meta: {
        title: '在线购票',
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
