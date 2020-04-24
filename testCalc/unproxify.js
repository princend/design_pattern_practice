"use strict";
exports.__esModule = true;
function unproxify(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
var name1 = { get: function () { return 'john'; }, set: function () { } };
var password1 = { get: function () { return '123456'; }, set: function () { } };
var proxyProps = { name: name1, password: password1 };
var ogProps = unproxify(proxyProps);
console.log(ogProps);
