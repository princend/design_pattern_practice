"use strict";
exports.__esModule = true;
var OrExpression = /** @class */ (function () {
    function OrExpression(exp1, exp2) {
        this.exp1 = null;
        this.exp2 = null;
        this.exp1 = exp1;
        this.exp2 = exp2;
    }
    OrExpression.prototype.interpret = function (context) {
        return this.exp1.interpret(context) || this.exp2.interpret(context);
    };
    return OrExpression;
}());
exports.OrExpression = OrExpression;
