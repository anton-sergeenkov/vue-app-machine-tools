import Vue from 'vue';
import App from './App.vue';

// Vuex
import { store } from './vuex.js';

// VueRouter
import VueRouter from 'vue-router';
import { routes } from './App.vue';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes 
});

// Vuetify
import Vuetify from 'vuetify';
Vue.use(Vuetify);

// Components
import './components-library/ui';

new Vue({
    el: '#app',
    store,
    render: h => h(App),
    router
})