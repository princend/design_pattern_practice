"use strict";
exports.__esModule = true;
var ExtendClass = /** @class */ (function () {
    function ExtendClass() {
    }
    ExtendClass.prototype.createProperty = function (prop) {
        this[prop.properyName] = prop.value;
    };
    return ExtendClass;
}());
exports.ExtendClass = ExtendClass;
var Demo = /** @class */ (function () {
    /**
     *
     */
    function Demo() {
        this.extendClass = new ExtendClass();
        this.res = this.getFake();
        this.getResponse();
    }
    Demo.prototype.getResponse = function () {
        var _this = this;
        var properyNames = Object.keys(this.res);
        properyNames.forEach(function (e) {
            _this.extendClass.createProperty({ properyName: e });
        });
        console.log(this.extendClass, 'cc~~~');
        // this.extendClass[properyNames[0]]
    };
    Demo.prototype.getFake = function () {
        return {
            payoffSums: 689,
            bite: 10,
            wagersCounts: 22
        };
    };
    return Demo;
}());
var b = new Demo();
// console.log(b,'bbb~~');
