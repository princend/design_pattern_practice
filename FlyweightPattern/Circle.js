"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(color) {
        this.color = color;
    }
    Circle.prototype.draw = function () {
        console.log("draw a " + this.color + " circle");
    };
    return Circle;
}());
exports.Circle = Circle;
