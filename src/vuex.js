import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        gift: {
            name: '',
            img: ''
        }
    },
    getters: {
        GET_GIFT(state) {
            return state.gift;
        }
    }, 
    mutations: {
        SET_GIFT(state, payload) {
            state.gift.name = payload.giftName;
            state.gift.img = payload.giftImage;
        }
    }
})
