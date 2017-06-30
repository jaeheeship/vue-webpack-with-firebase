import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase' 
import Vuex from 'vuex'
import store from './store/store'

Vue.config.productionTip = false 

var config = {
  apiKey: "{{firebase_apikey}}",
  authDomain: "{{firebase_authDomain}}",
  databaseURL: "{{firebase_databaseUrl}}",
  projectId: "{{firebase_projectid}}",
  storageBucket: "{{firebase_storageBucket}}",
  messagingSenderId: "{{firebase_senderId}}" 
};

var app = firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  beforeCreate(){
   firebase.auth().onAuthStateChanged( user =>{
            if(user) { 
                console.log(user) ;
                this.$store.dispatch('signin',user)  ;
            }else {
                
                console.log('error') ;
            } 
        });
 
  },
  render : h => h(App)
})