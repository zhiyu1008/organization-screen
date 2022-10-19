import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import dataV from '@jiaminghi/data-view'
// 引入echarts
Vue.prototype.$echarts = window.echarts
// 引入公共样式
import '@/common/index.scss'
import Mixin from './mixins';
Vue.mixin(Mixin);

Vue.use(dataV).use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
