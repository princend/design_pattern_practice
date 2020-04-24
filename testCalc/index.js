function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var jarid = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(jarid, ['name']);
console.log(strings, 'hello');
var keys;
console.log(keys, 'keys');
var value;
console.log(value['foo'], 'value');
