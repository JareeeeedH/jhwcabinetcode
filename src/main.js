import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

// import Vue-loading-overlay 的 元件與 CSS
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// 
import 'bootstrap/dist/js/bootstrap.min'
// 

// filters
import currencyFilter from './components/pages/filters/currency';
import dateFilter from './components/pages/filters/date';


// 註冊event bus檔案
import './bus';

// Vee-validate
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json' //語系
import * as rules from 'vee-validate/dist/rules'; //規則
//將規則寫入

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

//使用繁體中文語系
localize('zh_TW', TW);

// 兩個元件；單一input與 完整表單的驗證

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// class設定、利用boostrap。
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});



//跨域請求，存取cookie
axios.defaults.withCredentials = true;

// Axios啟用
Vue.use(VueAxios, axios);

// vuex啟用
Vue.use(Vuex)

//Loading啟用元件
Vue.component('Loading', Loading)

// 啟用filter
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)





Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
