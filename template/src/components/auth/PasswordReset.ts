import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'

@Component({
    name: 'PasswordReset'
})

export default class PasswordReset extends Vue { 

    email:string = '';

    reset(){
        firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
            alert('check your email'); 
        }).catch((error:any)=>{
            console.log(error.code) ; 

            if(error.code === 'auth/user-not-found') {

            }else if(error.code === '') {

            }else {

            }
        });
    } 
} 