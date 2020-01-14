"use strict";
exports.__esModule = true;
var GoodEmployee = /** @class */ (function () {
    /**
     *
     */
    function GoodEmployee(name) {
        this.name = name;
    }
    GoodEmployee.prototype.reward = function () {
        console.log(this.name + " says : yeah~~~ I got reward");
    };
    return GoodEmployee;
}());
exports.GoodEmployee = GoodEmployee;
