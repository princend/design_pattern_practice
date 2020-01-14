"use strict";
exports.__esModule = true;
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.prototype.accept = function (computerPartVisitor) {
        computerPartVisitor.visit(this);
    };
    return Mouse;
}());
exports.Mouse = Mouse;
