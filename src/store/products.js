
import axios from 'axios';

export default {

    // 此Vuex模組
    // state為區域變數
    // actions、mutations、getters 為全域變數
    
    // 將 actions、mutations、getters 改為區域變數
    namespaced: true,
    
    state: {
        products: [],
    },
    actions:
    {
        // 非同步、打API/ 打mutations
        getProducts(context) {

            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;

            // 標註是要找全區的commit、{ root: true}
            context.commit('LOADING', true, { root: true});

            axios.get(api).then((response) => {

                context.commit('PRODUCTS', response.data.products)
                console.log('取得產品列表', response.data)

                context.commit('LOADING', false, { root: true});
            })
        },

    },
    mutations: {

        PRODUCTS(state, target) {
            state.products = target;

        },

    },

    getters:{
        products(state){
            return state.products;
        }
    },

}