"use strict";
exports.__esModule = true;
var NoobEmployee_1 = require("./NoobEmployee");
var GoodEmployee_1 = require("./GoodEmployee");
var Facade = /** @class */ (function () {
    function Facade() {
        this.noobEmp1 = new NoobEmployee_1.NoobEmployee('Amy');
        this.noobEmp2 = new NoobEmployee_1.NoobEmployee('Ben');
        this.goodEmp1 = new GoodEmployee_1.GoodEmployee('Tom');
        this.goodEmp2 = new GoodEmployee_1.GoodEmployee('Eve');
    }
    Facade.prototype.rewardGoodEmployee = function () {
        this.goodEmp1.reward();
        this.goodEmp2.reward();
    };
    Facade.prototype.punishNoobEmployee = function () {
        this.noobEmp1.punished();
        this.noobEmp2.punished();
    };
    return Facade;
}());
exports.Facade = Facade;
