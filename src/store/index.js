// 載入與實例Vuex

import Vue from 'vue'
import Vuex from 'vuex';

// 需在此再import axios；並使用 axios.get(api) ...
import axios from 'axios';

Vue.use(Vuex)


export default new Vuex.Store({

    strict: true,
    state: {
        isLoading: false,
        products: [],
    },
    actions:
    {
        //讀取效果的 true/ false
        updateLoading(context, status){
            context.commit('LOADING', status)
        },

        // 非同步、打API/ 打mutations
        getProducts(context){

            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
            context.commit('LOADING', true);

            axios.get(api).then((response) => {

                context.commit('PRODUCTS', response.data.products)
                console.log('取得產品列表',response.data)

                context.commit('LOADING', false);
              })
        },

    },
    mutations:{

        LOADING(state, status){
            state.isLoading = status;
        },

        PRODUCTS(state, target){
            state.products = target;
        },

    },

});