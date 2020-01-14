"use strict";
exports.__esModule = true;
var CareTaker = /** @class */ (function () {
    function CareTaker() {
        this.list = [];
    }
    CareTaker.prototype.add = function (state) {
        this.list.push(state);
    };
    CareTaker.prototype.get = function (index) {
        return this.list[index];
    };
    return CareTaker;
}());
exports.CareTaker = CareTaker;
