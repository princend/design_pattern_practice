"use strict";
exports.__esModule = true;
var Subject = /** @class */ (function () {
    function Subject() {
        this.list = [];
    }
    Subject.prototype.attach = function (observer) {
        this.list.push(observer);
    };
    Subject.prototype.setState = function (state) {
        this.state = state;
        this.notifyAll();
    };
    Subject.prototype.getState = function () {
        return this.state;
    };
    Subject.prototype.notifyAll = function () {
        this.list.forEach(function (observer) { return observer.update(); });
    };
    return Subject;
}());
exports.Subject = Subject;
