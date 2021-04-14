require('./bootstrap');
import Vue from 'vue';
import App from './app/App.vue';
import { routes } from './app/routes.js'
import VueRouter from 'vue-router'
import { store } from './app/store';

const router = new VueRouter({
    routes,
    mode: 'history',
})

const app = new Vue({
    el: '#app',
    router: router,
    store: store,
    render : app => app(App),
});
