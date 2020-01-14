"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var memento_1 = require("./memento");
var Originator = /** @class */ (function (_super) {
    __extends(Originator, _super);
    function Originator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.saveStateToMemento = function () {
        return new memento_1.Memento(this.state);
    };
    Originator.prototype.getStateFromMemento = function (memento) {
        this.state = memento.getSate();
    };
    return Originator;
}(memento_1.Memento));
exports.Originator = Originator;
