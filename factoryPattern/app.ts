import { Factory } from "./factory";

let ShapeFactory = new Factory();

let cirlce = ShapeFactory.getCircle('red');

cirlce.draw();

let square = ShapeFactory.getSquare();

square.draw();