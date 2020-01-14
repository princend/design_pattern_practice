"use strict";
exports.__esModule = true;
var ShapeDiagram = /** @class */ (function () {
    function ShapeDiagram() {
        this.list = [];
    }
    ShapeDiagram.prototype.add = function (c) {
        this.list.push(c);
    };
    ShapeDiagram.prototype.remove = function (c) {
        this.list = this.list.filter(function (item) { return item !== c; });
    };
    ShapeDiagram.prototype.draw = function () {
        this.list.forEach(function (item) { return item.draw(); });
    };
    return ShapeDiagram;
}());
exports.ShapeDiagram = ShapeDiagram;
