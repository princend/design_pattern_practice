"use strict";
exports.__esModule = true;
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.prototype.accept = function (computerPartVisitor) {
        computerPartVisitor.visit(this);
    };
    return Keyboard;
}());
exports.Keyboard = Keyboard;
