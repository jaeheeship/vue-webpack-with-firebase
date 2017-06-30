import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import IfcNewVerttle from './../interfaces/IfcNewVerttle' 
import IfcVerttle from './../interfaces/IfcVerttle'
import IfcLink from './../interfaces/IfcLink'

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