"use strict";
exports.__esModule = true;
var IsLogin = /** @class */ (function () {
    function IsLogin(p) {
        this.person = p;
    }
    IsLogin.prototype.chat = function () {
        console.log('keep online and chatting!!!');
    };
    IsLogin.prototype.login = function () {
        console.log("you're already in");
    };
    IsLogin.prototype.logout = function () {
        console.log('logout ...');
        this.person.setState(this.person.getisLogoutState());
    };
    return IsLogin;
}());
exports.IsLogin = IsLogin;
