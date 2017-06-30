<template lang="pug">
div.columns.is-gapless.is-multiline.is-mobile 
    div.column.right-column
        div.form-wrapper
            div.form-wrapper-header
                img(src="./../assets/logo@1.5x.png")
            form.form
                h1 안녕하세요.
                    small 빈칸에서 아티스트의 작품을 소장하세요. 
                div.social-buttons
                    button.button.facebook sign in with
                        strong &nbsp;facebook 
                    button.button.google sign in with
                        strong &nbsp;google
                div.divider OR

                div.field
                    label.label 이메일
                    p.control.has-icons-right
                        input.input.is-medium(type="email",v-model="signinForm.email")
                        span.icon.is-small.is-right
                            i.material-icons check
                div.field
                    label.label 비밀번호 
                    p.control.has-icons-right
                        input.input.is-medium(type="password",v-model="signinForm.password")
                        span.icon.is-small.is-right
                            i.material-icons check 
                div.notification.is-danger(v-if="isError")
                    i.material-icons priority_high
                        |{{errorMessage}}
                div.columns.is-mobile.form-footer
                    div.column.is-half
                        a.button.is-link 패스워드 찾기
                    div.column.is-half
                        button.pull-right.button.is-info(
                            v-bind:class="{'is-loading':isLoading}",v-on:click.prevent="signIn") 
                            |&nbsp;&nbsp;Sign in&nbsp;&nbsp;
            div.form-wrapper-footer
                router-link(to="signup") 아직 회원이 아니시면 지금 <strong>회원가입</strong> 하세요. 




</template>

<script lang="ts">
import Signin from './Signin'
export default Signin
</script>

<style lang="scss" scoped>
.form-wrapper { 
    max-width: 500px;
    margin: 0 auto;

    .form-wrapper-header {
        text-align:center;
        img {
            max-width:200px;
        }

        margin-top:30px;
        margin-bottom:60px;

    }

    .form-wrapper-footer { 
        text-align:right;
    }
}

.form {
    h1 {
        font-size:1.5rem;
        text-align:left;
        font-weight:500 ;
        margin-bottom:40px; 

        small {
            display:block;
            font-size:1rem;
            font-weight:200;
        }
    }
    padding: 30px;
    border: 1px solid #cfcfcf;
    background: #fafafa;
    border-radius:2px;
    margin-bottom:15px;

}

.form-footer {

    margin-top:10px; 

}

.divider {
    margin-bottom:30px;
    margin-top:30px;
}


.social-buttons {
    display:flex;
    .button { 
        font-size : 1rem;
        display:block;
        width:50%;
        margin-bottom:10px;
        
        color:#fff ;

        &.facebook {
            background-color:#3a589a ;
            margin-right:5px;
            font-weight:100;
        }

        &.google {
            background-color:#e04a33 ; 
            margin-left:5px;
            font-weight:100;
        }

        @media screen and (max-width:960px) {
            font-size:0.9rem;
        }
    }

    margin-bottom:20px;
}

.sidebar {
    flex:none;
    width: 450px ;
    background: url("./../assets/bgline.png") repeat-y;
    background-size:contain ; 
    background-position:bottom;

    @media screen and (max-width: 960px) {
        display:none;
    }
}

.login-area {
    position:absolute;
    top:30px;
    right:30px;
}


.letter {
    width:80%;
    background:transparent;
    border: 1px solid #000;
    font-size:0.9rem;
    padding:30px;

    .header img {
        width:150px;
        margin-bottom:30px;
    }
    
}

.leftbar { 
    padding-top:50px;
    background: url("./../assets/signupbg.jpeg") no-repeat;
    background-size:contain ; 
    background-position:bottom;
}

.right-column {
    display:flex; 
    align-items:center;
    flex-direction:column ; 
    justify-content:center;

    @media screen and (max-width:960px) {
        min-height:100vh;
    }
}


.is-fullheight {
    min-height:100vh;
}

#password-message {
    margin-top:10px;
    font-size:11pt;

    .material-icons {
        font-size:inherit;
    } 
} 

</style>
