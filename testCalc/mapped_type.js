"use strict";
exports.__esModule = true;
var abc = { newMember: false, name: 'aaa' };
var monkasName = { get: function () { return 'monkas1'; }, set: function () { } };
var monkasAge = { get: function () { return 6; }, set: function () { } };
var monkas = { name: monkasName, age: monkasAge };
console.log(monkas.age.get(), 'monkey');
function proxify(o) {
    return;
}
var props = {};
var proxyProps = proxify(props);
var aa = { kek1: 'aa' };
var bb = { prop1: '2', prop2: '2', prop3: '2' };
