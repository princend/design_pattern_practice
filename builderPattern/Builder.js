"use strict";
exports.__esModule = true;
var Food_1 = require("./Food");
var Salt_1 = require("./Salt");
var Oil_1 = require("./Oil");
var Builder = /** @class */ (function () {
    function Builder() {
    }
    Builder.prototype.prepareSteak = function () {
        var steak = new Food_1.Food();
        steak.addComponent(new Salt_1.Salt());
        steak.addComponent(new Oil_1.Oil());
        return steak;
    };
    return Builder;
}());
exports.Builder = Builder;
