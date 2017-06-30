import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        hello: 1
    },
    mutations: {
        increment: function () {
            alert('inc2222');
        }
    }
});
