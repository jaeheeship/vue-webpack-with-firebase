<template>
<div class="columns is-gapless is-multiline is-mobile"> 
  <div class="column right-column "> 
    <div class="center-form-wrapper">
        <h1>
            회원가입
        </h1>
        <hr/>
        <form class="form">  
            <div class="field">
                <label class="label">Email</label>
                <p class="control has-icons-right">
                    <input class="input" type="email" v-model="signupForm.email">
                    <span class="icon is-small is-right">
                        <i class="material-icons">check</i>
                    </span> 
                </p>
            </div> 
            <div class="field">
                <label class="label">Password</label>
                <p class="control has-icons-right">
                    <input class="input" type="password" v-model="signupForm.password">
                    <span class="icon is-small is-right">
                        <i class="material-icons">check</i>
                    </span>

                </p>
                <div id="password-message" class="message is-success" v-if="!isValidPassword"  >
                    <div class="message-body">
                        <ul>
                            <li>
                                <i class="material-icons">check_circle</i>&nbsp;6글자 이상 입력하세요.
                            </li> 
                            <li>
                                <i class="material-icons">check_circle</i>&nbsp;숫자는 하나 이상 입력해주세요.
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div class="notification is-danger" v-if="isError">
                <i class="material-icons">priority_high</i>&nbsp; 이메일 확인해주세요. 이미 가입한 이메일 입니다.
            </div>
            <button class="button is-info" 
                v-bind:class="{'is-loading':isLoading}"  
                v-on:click.prevent="signup">Register</button> 
        </form>
    </div>

  </div> 
</div>
</template>

<script lang="ts">
import Signup from './Signup'
export default Signup
</script>

<style lang="scss" scoped>
.sidebar {
    flex:none;
    width: 450px ;
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
    background-size:contain ; 
    background-position:bottom;
}

.right-column {
    display:flex; 
    align-items:center;

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

.center-form-wrapper {
    margin:0 auto ; 
    z-index:1;
    width:100%; 

    h1 {
        margin : 0px 0px 0px;
        font-size:1.5rem;
        font-weight:bold;
        text-align:center;
    }

    hr {
        width:20px;
        margin:20px auto;
        border:1px solid #000;
    }

    .form {
        max-width:500px;
        margin:0 auto ;
        border-radius:5px;
        background:#fff;
        padding:40px 30px;
        //box-shadow : 0px 0px 8px #b0b0b0;
    } 

}
</style>