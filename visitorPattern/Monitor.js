"use strict";
exports.__esModule = true;
var Monitor = /** @class */ (function () {
    function Monitor() {
    }
    Monitor.prototype.accept = function (computerPartVisitor) {
        computerPartVisitor.visit(this);
    };
    return Monitor;
}());
exports.Monitor = Monitor;
