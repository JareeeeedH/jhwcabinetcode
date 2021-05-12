// 載入與實例Vuex

import Vue from 'vue'
import Vuex from 'vuex';

// 需在此再import axios；並使用 axios.get(api) ...
import axios from 'axios';

Vue.use(Vuex)

import productsModules from './products';

export default new Vuex.Store({

    strict: true,
    state: {
        isLoading: false,

        // 拆分
        // products: [],
        
        cartList: {
            carts: {}
        },
    },
    actions:
    {
        //讀取效果的 true/ false
        updateLoading(context, status) {
            context.commit('LOADING', status)
        },

        // 非同步、打API/ 打mutations

        // getProducts(context) {

        //     const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
        //     context.commit('LOADING', true);

        //     axios.get(api).then((response) => {

        //         context.commit('PRODUCTS', response.data.products)
        //         console.log('取得產品列表', response.data)

        //         context.commit('LOADING', false);
        //     })
        // },
        getCart(context) {

            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;

            axios.get(api).then((response) => {
                context.commit('CART', response.data.data)
                console.log('Action:取得購物車清單', response.data.data);
            });

        },

        removeCart(context, { cartItem, vm }) {

            console.log('Vuex This', this);
            console.log('Vue This', vm);

            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${cartItem.id}`;
            axios.delete(api).then((response) => {

                if (response.data.success) {

                    // 如刪除成功，自打dispatch、再reload API。
                    context.dispatch('getCart');
                    vm.$bus.$emit('message:push', '已刪除', 'danger')
                }
            })
        },

        AddToCart(context, { id, qty }) {

            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
            const vm = this;

            context.commit('LOADING', true)

            // 加入購物車所需丟入的資料結構。
            const addingItem = {
                product_id: id,
                qty: qty,
            };

            axios.post(api, { data: addingItem }).then((response) => {
                console.log('新增產品:',response.data);
                context.commit('LOADING', false)
                context.dispatch('getCart')
            });

        },

    },
    mutations: {

        LOADING(state, status) {
            state.isLoading = status;
        },
        // 拆分
        // PRODUCTS(state, target) {
        //     state.products = target;
        // },

        CART(state, target) {
            state.cartList = target;
        },

    },

    // getters把資料註冊到全域； Vue的store.mapGetters內
    getters:{
        isLoading(state){
            return state.isLoading;
        },
        cartList(state){
            return state.cartList;
        },

        // products(state){
        //     return state.products;
        // }
    },

    modules:{
        productsModules
    },

});