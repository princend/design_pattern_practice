"use strict";
exports.__esModule = true;
var isLogin_1 = require("./isLogin");
var isLogout_1 = require("./isLogout");
var Person = /** @class */ (function () {
    function Person() {
        this.isLogin = new isLogin_1.IsLogin(this);
        this.isLogout = new isLogout_1.IsLogout(this);
        this.state = this.isLogout;
    }
    Person.prototype.chat = function () {
        this.state.chat();
    };
    Person.prototype.login = function () {
        this.state.login();
    };
    Person.prototype.logout = function () {
        this.state.logout();
    };
    // 取得登入狀態
    Person.prototype.getisLoginState = function () {
        return this.isLogin;
    };
    // 取得登出狀態
    Person.prototype.getisLogoutState = function () {
        return this.isLogout;
    };
    Person.prototype.getState = function () {
        console.log(this.state, 'state~~~');
        return this.state;
    };
    Person.prototype.setState = function (s) {
        this.state = s;
    };
    return Person;
}());
exports.Person = Person;
