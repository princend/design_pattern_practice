"use strict";
exports.__esModule = true;
var DateType = /** @class */ (function () {
    function DateType() {
    }
    return DateType;
}());
exports.DateType = DateType;
exports.dic = {
    hasToday: ['today'], hasWeek: ['thisWeek', 'lastWeek']
};
var setting = {
    hasToday: false,
    hasWeek: true
};
function getArr() {
    var arr = [];
    Object.keys(setting).forEach(function (e) {
        if (setting[e]) {
            arr = arr.concat(exports.dic[e]);
        }
    });
    return arr;
}
console.log(getArr(), 'n');
