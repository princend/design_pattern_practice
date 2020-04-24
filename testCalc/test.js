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
var Circle = /** @class */ (function () {
    function Circle() {
        this.pi2 = 3.1415926;
    }
    Circle.prototype.aa = function () {
        return Circle.pi;
    };
    Circle.pi = 3.14;
    return Circle;
}());
exports.Circle = Circle;
var Cir1 = /** @class */ (function (_super) {
    __extends(Cir1, _super);
    /**
     *
     */
    function Cir1() {
        var _this = _super.call(this) || this;
        _this.pi2 = 123;
        return _this;
    }
    Cir1.prototype.bb = function () {
        return Circle.pi;
    };
    return Cir1;
}(Circle));
exports.Cir1 = Cir1;
var a = new Cir1();
// console.log(a.aa());
console.log(a.bb());

