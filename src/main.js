// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局css
require('../static/css/reset.css');

//mint-ui
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

//iview
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
//axios
import axios from 'axios'
Vue.prototype.$http = axios;

//store
import store from './store/index'

Vue.use(MintUi);
Vue.use(Iview);


//filter
Vue.filter('normalData', function (time) {
  let oDate = new Date(parseInt(time) * 1000);
  return oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
});

//loading
import loading from './components/loading/index'
Vue.use(loading);


//关于axiso的配置
// 请求拦截
axios.interceptors.request.use(function (config){
  // 处理请求之前的配置
  store.dispatch('showLoading');
  return config;
}, function (error){
  // 请求失败的处理
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response){
  // 处理响应数据
  store.dispatch('hideLoading');
  return response;
}, function (error){
  // 处理响应失败
  return Promise.reject(error);
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
