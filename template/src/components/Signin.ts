import Vue from 'vue'
import Component from 'vue-class-component'
import firebase from 'firebase'

interface SigninFormValue { 
    email:string,
    password:string
}

@Component({
    name : 'signin'
}) 

export default class Signin extends Vue { 

    signinForm:SigninFormValue = {
        email: '',
        password: '' 
    }

    errorMessage:string  = ''
    isError:boolean = false 
    isLoading:boolean = false

    mounted(){ 
    }


    signIn(){ 
        const auth = firebase.auth() ;
        
        const email:string = this.signinForm.email ;
        const password:string = this.signinForm.password ;

        this.isLoading = true ; 

        auth.signInWithEmailAndPassword(email,password).then(firebaseUser=>{ 
            this.isLoading = false ;
            console.log(firebaseUser) ;
        }).catch((error:any) => {
            let authError = error as firebase.auth.Error ;
            let errorCode = authError.code ;

            console.log(authError.message) ;

            this.isLoading = false ;
            this.isError = true ;

            if(errorCode === 'auth/user-not-found'){ 
                this.errorMessage = '가입되지 않은 계정입니다.' ;
            }else if(errorCode === 'auth/user-disabled') {
                this.errorMessage = '사용정지된 계정입니다.' ;
            }else if(errorCode === 'auth/wrong-password') {
                this.errorMessage = '패스워드를 확인하세요.' ;
            }else {
                this.errorMessage = '알수없는 오류 입니다. ' ;
            } 
        }) 

        
    } 
}