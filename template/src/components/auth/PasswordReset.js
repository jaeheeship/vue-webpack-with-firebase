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
var PasswordReset = (function (_super) {
    __extends(PasswordReset, _super);
    function PasswordReset() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.email = '';
        return _this;
    }
    PasswordReset.prototype.reset = function () {
        firebase.auth().sendPasswordResetEmail(this.email).then(function () {
            alert('check your email');
        }).catch(function (error) {
            console.log(error.code);
            if (error.code === 'auth/user-not-found') {
            }
            else if (error.code === '') {
            }
            else {
            }
        });
    };
    return PasswordReset;
}(Vue));
PasswordReset = __decorate([
    Component({
        name: 'PasswordReset'
    })
], PasswordReset);
export default PasswordReset;
