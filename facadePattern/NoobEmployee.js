"use strict";
exports.__esModule = true;
var NoobEmployee = /** @class */ (function () {
    function NoobEmployee(n) {
        this.name = n;
    }
    NoobEmployee.prototype.punished = function () {
        console.log(this.name + "says:oh i'm punish");
    };
    return NoobEmployee;
}());
exports.NoobEmployee = NoobEmployee;
