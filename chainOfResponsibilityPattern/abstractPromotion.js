"use strict";
exports.__esModule = true;
var AbstractPromotion = /** @class */ (function () {
    function AbstractPromotion(combo) {
        this.promotionCombo = [];
        this.promotionCombo = combo;
    }
    AbstractPromotion.prototype.setNextPromotion = function (nextPromotion) {
        this.nextPromotion = nextPromotion;
    };
    AbstractPromotion.prototype.compareArray = function (arrA, arrB) {
        return arrB.length == (arrA.filter(function (a) { return arrB.filter(function (b) { return a === b; })[0]; })).length;
    };
    AbstractPromotion.prototype.usePromotion = function (goods) {
        if (this.compareArray(goods, this.promotionCombo)) {
            this.use();
        }
        if (this.nextPromotion != null) {
            this.nextPromotion.usePromotion(goods);
        }
        else {
            console.log('check out');
        }
    };
    return AbstractPromotion;
}());
exports.AbstractPromotion = AbstractPromotion;
