import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        gift: {
            name: 'Не выбран',
            img: ''
        },
        quiz: ''
    },
    getters: {
        GET_GIFT(state) {
            return state.gift;
        },
        GET_QUIZ(state) {
            return state.quiz;
        }
    }, 
    mutations: {
        SET_GIFT(state, payload) {
            state.gift.name = payload.giftName;
            state.gift.img = payload.giftImage;
        },
        SET_QUIZ(state, payload) {
            state.quiz = payload.quiz;
        }
    }
})
