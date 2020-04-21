var Disposable = /** @class */ (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activatable = /** @class */ (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deacivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var SmartObject = /** @class */ (function () {
    /** */
    function SmartObject() {
        var _this = this;
        this.isActive = false;
        this.isDisposed = false;
        setInterval(function () { return console.log(_this.isActive + ':' + _this.isDisposed); }, 500);
    }
    SmartObject.prototype.interact = function () { this.activate(); };
    ;
    SmartObject.prototype.activate = function () {
    };
    SmartObject.prototype.deacivate = function () {
    };
    SmartObject.prototype.dispose = function () {
    };
    return SmartObject;
}());
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(derivedCtor.prototype, name,
//                 Object.getOwnPropertyDescriptor(baseCtor.prototype, name))
//         })
//     })
// }
// applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
// setTimeout(() => smartObj.interact(), 1000);
console.log(smartObj);
