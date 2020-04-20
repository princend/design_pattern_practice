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
var foo = /** @class */ (function () {
    function foo() {
        this._bar = false;
    }
    Object.defineProperty(foo.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        set: function (value) {
            if (!value) {
                console.log('not allowed');
            }
            else {
                this._bar = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return foo;
}());
var realFoo = /** @class */ (function (_super) {
    __extends(realFoo, _super);
    /**
     *
     */
    function realFoo() {
        var _this = _super.call(this) || this;
        console.log(_this.bar);
        return _this;
    }
    return realFoo;
}(foo));
var a = new foo();
a.bar = false;
var b = new realFoo();
