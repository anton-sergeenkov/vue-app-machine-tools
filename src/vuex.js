import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products: []
    },
    getters: {
        getProducts(state) {
            return state.products;
        }
    }, 
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload.products;
        }
    }
})
