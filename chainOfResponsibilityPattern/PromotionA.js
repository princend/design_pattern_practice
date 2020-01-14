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
var abstractPromotion_1 = require("./abstractPromotion");
var PromotionA = /** @class */ (function (_super) {
    __extends(PromotionA, _super);
    function PromotionA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PromotionA.prototype.use = function () {
        console.log('promotion A');
    };
    return PromotionA;
}(abstractPromotion_1.AbstractPromotion));
exports.PromotionA = PromotionA;
