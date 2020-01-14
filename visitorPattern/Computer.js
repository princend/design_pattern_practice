"use strict";
exports.__esModule = true;
var Keyboard_1 = require("./Keyboard");
var Monitor_1 = require("./Monitor");
var Mouse_1 = require("./Mouse");
var Computer = /** @class */ (function () {
    function Computer() {
        this.parts = [new Keyboard_1.Keyboard(), new Monitor_1.Monitor(), new Mouse_1.Mouse()];
    }
    Computer.prototype.accept = function (computerPartVisitor) {
        this.parts.forEach(function (part) { return part.accept(computerPartVisitor); });
        computerPartVisitor.visit(this);
    };
    return Computer;
}());
exports.Computer = Computer;
