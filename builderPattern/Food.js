"use strict";
exports.__esModule = true;
var Food = /** @class */ (function () {
    function Food() {
        this.componentList = [];
    }
    Food.prototype.addComponent = function (component) {
        this.componentList.push(component);
    };
    Food.prototype.getDetail = function () {
        this.componentList.forEach(function (c) { return console.log(c.getTaste()); });
    };
    return Food;
}());
exports.Food = Food;
