var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import Component from 'vue-class-component';
import firebase from 'firebase';
var Signin = (function (_super) {
    __extends(Signin, _super);
    function Signin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signinForm = {
            email: '',
            password: ''
        };
        _this.errorMessage = '';
        _this.isError = false;
        _this.isLoading = false;
        return _this;
    }
    Signin.prototype.mounted = function () {
    };
    Signin.prototype.signIn = function () {
        var _this = this;
        var auth = firebase.auth();
        var email = this.signinForm.email;
        var password = this.signinForm.password;
        this.isLoading = true;
        auth.signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
            _this.isLoading = false;
            console.log(firebaseUser);
        }).catch(function (error) {
            var authError = error;
            var errorCode = authError.code;
            console.log(authError.message);
            _this.isLoading = false;
            _this.isError = true;
            if (errorCode === 'auth/user-not-found') {
                _this.errorMessage = '가입되지 않은 계정입니다.';
            }
            else if (errorCode === 'auth/user-disabled') {
                _this.errorMessage = '사용정지된 계정입니다.';
            }
            else if (errorCode === 'auth/wrong-password') {
                _this.errorMessage = '패스워드를 확인하세요.';
            }
            else {
                _this.errorMessage = '알수없는 오류 입니다. ';
            }
        });
    };
    return Signin;
}(Vue));
Signin = __decorate([
    Component({
        name: 'signin'
    })
], Signin);
export default Signin;
