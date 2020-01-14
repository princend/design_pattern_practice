"use strict";
exports.__esModule = true;
var Memento = /** @class */ (function () {
    function Memento(state) {
        state ? this.state = state : false;
    }
    Memento.prototype.getSate = function () {
        return this.state;
    };
    return Memento;
}());
exports.Memento = Memento;
