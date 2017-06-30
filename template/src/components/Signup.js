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
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["None"] = 0] = "None";
    StatusCode[StatusCode["Error"] = 1] = "Error";
    StatusCode[StatusCode["Success"] = 2] = "Success";
})(StatusCode || (StatusCode = {}));
var Signup = (function (_super) {
    __extends(Signup, _super);
    function Signup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.signupForm = {
            email: '',
            username: '',
            password: ''
        };
        _this.isLoading = false;
        _this.statusCode = StatusCode.None;
        return _this;
    }
    Object.defineProperty(Signup.prototype, "isValidPassword", {
        get: function () {
            if (this.signupForm.password.length >= 6) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Signup.prototype, "isError", {
        get: function () {
            if (this.statusCode != StatusCode.Error) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Signup.prototype.signup = function () {
        var _this = this;
        var email = this.signupForm.email;
        var password = this.signupForm.password;
        this.isLoading = true;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
            _this.statusCode = StatusCode.Success;
            _this.isLoading = false;
            //성공 했을때 어떻게 처리할 것인가? 
        }).catch(function (error) {
            _this.statusCode = StatusCode.Error;
            _this.isLoading = false;
            console.log(error);
            //실패 했을때 어떻게 처리 할 것인가?
        });
    };
    return Signup;
}(Vue));
Signup = __decorate([
    Component({
        name: 'Signup'
    })
], Signup);
export default Signup;
