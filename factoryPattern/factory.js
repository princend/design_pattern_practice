"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var Circle_1 = require("../FlyweightPattern/Circle");
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.getCircle = function (color) {
        return new Circle_1.Circle(color);
    };
    Factory.prototype.getSquare = function () {
        return new Square_1.Square();
    };
    return Factory;
}());
exports.Factory = Factory;
