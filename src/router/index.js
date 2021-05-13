import Vue from 'vue'
import Router from 'vue-router'
//官方所需載入元件

// 首頁
import HelloWorld from '@/components/index'


// 產品服務區
// import services from '@/components/pages/services'
import product_whiskey from '@/components/pages/service_whiskey'
import product_travel from '@/components/pages/service_travel'
import product_party from '@/components/pages/service_party'
import disscussion_area from '@/components/pages/disscussion_area'
import productDetail from '@/components/pages/single_product_detail'


// 購物訂單區
import shoppingCart from '@/components/pages/shoppingCart'
import customerOrder from '@/components/pages/customerOrder'
import orderDone from '@/components/pages/orderDone'

// 後台區
import Login from '@/components/pages/login'
import Admin from '@/components/pages/dashboard'
import Products from '@/components/pages/products'
import Coupon from '@/components/pages/coupon'
import Orders from '@/components/pages/orders'


//???
// import Menu from '@/components/pages/menu'

//自訂的分頁元件

Vue.use(Router)
// import& ues 使用 router。


//匯出給 main.js使用
export default new Router({
  routes: [
    // 無效跳轉
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HelloWorld/首頁',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login/登入',
      component: Login,
    },
    {
      path: '/admin',
      name: 'amdin/後台管理',
      component: Admin,
      // meta: { requiresAuth: true },
      children:[
        {
          path: 'products',
          component: Products,
          name:'ProductList',
          // meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          component: Coupon,
          name:'coupon',
          // meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          component: Orders,
          name:'orders',
          // meta: { requiresAuth: true },
        },
      ],
    },
    // {
    //   path: '/services',
    //   name: '',
    //   // component: services,
    //   components:{
    //     default: services,
    //     // menu: Menu,
    //   },
    //   children:[
    //     {
    //       path: '',
    //       name: 'p_whiskey',
    //       component: product_whiskey,
    //     },
    //     {
    //       path: 'travel',
    //       name: 'p_travel',
    //       component: product_travel,
    //     },
    //     {
    //       path: 'party',
    //       name: 'p_party',
    //       component: product_party,
    //     },
    //     {
    //       path: 'social',
    //       name: 'd-area',
    //       component: disscussion_area,
    //     },
    //   ],
    // },
    {
      path: '/travel',
      component: product_travel,
      name:'product_travel',
    },
    {
      path: '/whiskey',
      component: product_whiskey,
      name:'product_whiskey',
    },
    {
      path: '/party',
      component: product_party,
      name:'product_party',
    },
    //購物車內容
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    // 確認訂單內容
    {
      path: '/customerOrder/:orderID',
      name: 'customerOrder',
      component: customerOrder
    },
     // 單一產品細節頁面
     {
      path: '/whiskey/:productID',
      name: 'productDetail',
      component: productDetail
    },
    // 感謝彭場
    {
      path: '/orderSuccess',
      name: 'paymentDone',
      component: orderDone
    },
  ]
})
