import { Square } from "./Square";
import { Shape } from "../FlyweightPattern/Shape";
import { Circle } from "../FlyweightPattern/Circle";


export class Factory {
    constructor() {
    }
    public getCircle(color): Shape {
        return new Circle(color);
    }
    public getSquare(): Shape {
        return new Square();
    }
}