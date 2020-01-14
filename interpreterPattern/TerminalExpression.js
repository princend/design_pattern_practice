"use strict";
exports.__esModule = true;
var TerminalExpression = /** @class */ (function () {
    function TerminalExpression(data) {
        this.data = data;
    }
    TerminalExpression.prototype.interpret = function (context) {
        return context.indexOf(this.data) >= 0;
    };
    return TerminalExpression;
}());
exports.TerminalExpression = TerminalExpression;
