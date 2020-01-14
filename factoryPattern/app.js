"use strict";
exports.__esModule = true;
var factory_1 = require("./factory");
var ShapeFactory = new factory_1.Factory();
var cirlce = ShapeFactory.getCircle('red');
cirlce.draw();
var square = ShapeFactory.getSquare();
square.draw();
