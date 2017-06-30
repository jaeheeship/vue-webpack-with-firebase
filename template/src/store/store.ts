import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex) ;

export default new Vuex.Store({
    state: {
        verttles : [],
        currentVerttle: {},
        currentUser : {} ,
        links:[]
    }, 

    getters: { 
        currentUser(state){ 
            if(state.currentUser){
                return state.currentUser = firebase.auth().currentUser ;
            }else{
                return null ;
            }
        }
    },

    mutations: { 

    },

    actions: { 
        signin({commit},user){ 
            commit('signin',user) ;
        }
    }
})