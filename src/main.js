import Vue from 'vue'

Vue.config.productionTip = false;

Vue.component('navbar', require('./components/NavBar.vue'));

new Vue().$mount('#site');
