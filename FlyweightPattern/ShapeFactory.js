"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var ShapeFactory = /** @class */ (function () {
    function ShapeFactory() {
    }
    ShapeFactory.getCircle = function (key) {
        var circle = this.fliesMap[key];
        if (circle == null) {
            circle = new Circle_1.Circle(key);
            this.fliesMap[key] = circle;
            console.log("create a " + key + " circle");
        }
        console.log("Get a " + key + " circle");
        return circle;
    };
    ShapeFactory.fliesMap = {};
    return ShapeFactory;
}());
exports.ShapeFactory = ShapeFactory;
