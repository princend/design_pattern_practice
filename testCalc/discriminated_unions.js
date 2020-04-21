var Square = /** @class */ (function () {
    function Square() {
    }
    return Square;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    return Circle;
}());
function area(s) {
    switch (s.kind) {
        case "square": return Math.pow(s.size, 2);
        case "rectangle": return s.height * s.width;
        case "cirlce": return Math.PI * Math.pow(s.radius, 2);
    }
}
var donuts = { kind: 'cirlce', radius: 8 };
console.log(area(donuts));
