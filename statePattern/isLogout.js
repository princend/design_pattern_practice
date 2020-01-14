"use strict";
exports.__esModule = true;
var IsLogout = /** @class */ (function () {
    function IsLogout(p) {
        this.person = p;
    }
    IsLogout.prototype.chat = function () {
        console.log('pls login');
    };
    IsLogout.prototype.login = function () {
        console.log("login ...");
        this.person.setState(this.person.getisLoginState());
    };
    IsLogout.prototype.logout = function () {
        console.log("you're already out ...");
    };
    return IsLogout;
}());
exports.IsLogout = IsLogout;
