"use strict";
exports.__esModule = true;
var AndExpression = /** @class */ (function () {
    function AndExpression(exp1, exp2) {
        this.exp1 = null;
        this.exp2 = null;
        this.exp1 = exp1;
        this.exp2 = exp2;
    }
    AndExpression.prototype.interpret = function (context) {
        return this.exp1.interpret(context) && this.exp2.interpret(context);
    };
    return AndExpression;
}());
exports.AndExpression = AndExpression;
