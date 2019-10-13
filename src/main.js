import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
Vue.config.productionTip = false

// vant按需引入
import { Button, Tabbar, TabbarItem, Icon, Row, Col, NavBar, Popup, Picker, Search, Swipe, SwipeItem, Lazyload, NoticeBar, Tab, Tabs, List, Cell, CellGroup,
  Rate,Tag,Checkbox, CheckboxGroup,RadioGroup, Radio,Toast, DropdownMenu, DropdownItem, Grid, GridItem, Loading } from 'vant';
Vue.use(Button).use(Tabbar).use(TabbarItem).use(Icon).use(Row).use(Col).use(NavBar).use(Popup).use(Picker).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(NoticeBar).use(Tab).use(Tabs).use(List).use(Cell).use(CellGroup).use(Rate).use(Tag).use(Checkbox).use(CheckboxGroup).use(RadioGroup).use(Radio).use(Toast).use(DropdownMenu).use(DropdownItem).use(Grid).use(GridItem).use(Loading);


// 全局组件
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context('./components/basecomponents',true,/\.vue/)
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
