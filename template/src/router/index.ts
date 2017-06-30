import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Signup from '@/components/Signup.vue'
import Signin from '@/components/Signin.vue'
import PasswordReset from '@/components/auth/PasswordReset.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/' ,
      name: 'Hello',
      component : Hello
    },{
      path: '/signup' ,
      name: 'signup',
      component : Signup
    } ,{
      path: '/signin' ,
      name: 'signin',
      component : Signin 
    } ,{
      path: '/password-reset' ,
      name: 'password-reset',
      component : PasswordReset 
    } 
  ]
}) 