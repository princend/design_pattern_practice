"use strict";
exports.__esModule = true;
var ComputerPartDisplayVisitor = /** @class */ (function () {
    function ComputerPartDisplayVisitor() {
    }
    ComputerPartDisplayVisitor.prototype.visit = function (part) {
        var partType = part.constructor.toString().match(/\w+/g)[1];
        this[partType + "Visit"](part);
    };
    ComputerPartDisplayVisitor.prototype.ComputerVisit = function (computer) {
        console.log('displaycomputer' + computer);
    };
    ComputerPartDisplayVisitor.prototype.MouseVisit = function (mouse) {
        console.log('displaymouse' + mouse);
    };
    ComputerPartDisplayVisitor.prototype.KeyboardVisit = function (keyboard) {
        console.log('displaykeyboard' + keyboard);
    };
    ComputerPartDisplayVisitor.prototype.MonitorVisit = function (monitor) {
        console.log('displaymonitor' + monitor);
    };
    return ComputerPartDisplayVisitor;
}());
exports.ComputerPartDisplayVisitor = ComputerPartDisplayVisitor;
