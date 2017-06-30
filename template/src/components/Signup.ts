import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'

interface SignupFormValue {
    email :string,
    username:string,
    password:string
} 

enum StatusCode {None,Error,Success}

@Component({
    name: 'Signup'
}) 

export default class Signup extends Vue { 

    signupForm:SignupFormValue = {
        email : '' ,
        username: '', 
        password : '' 
    } 

    isLoading:boolean = false;

    statusCode:StatusCode = StatusCode.None

    get isValidPassword():boolean {
        if(this.signupForm.password.length >= 6) { 
            return true
        }
        return false
    }

    get isError():boolean {
        if(this.statusCode != StatusCode.Error) {
            return false
        }
        return true
    }

    signup() :  void { 
        let email:string = this.signupForm.email ;
        let password:string = this.signupForm.password ;
        this.isLoading = true ; 

        firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
            this.statusCode = StatusCode.Success ; 
            this.isLoading = false ;
            //성공 했을때 어떻게 처리할 것인가? 
        }).catch((error) =>{ 
            this.statusCode = StatusCode.Error ;
            this.isLoading = false ;
            console.log(error) ; 
            //실패 했을때 어떻게 처리 할 것인가?
        }); 
    }
}