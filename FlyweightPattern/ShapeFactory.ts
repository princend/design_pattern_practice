import { Shape } from "./Shape";
import { Circle } from "./Circle";

export class ShapeFactory {
    private static fliesMap = <any>{};
    public static getCircle(key: string): Shape {
        let circle: Shape = this.fliesMap[key];
        if (circle == null) {
            circle = new Circle(key);
            this.fliesMap[key] = circle;
            console.log(`create a ${key} circle`);
        }
        console.log(`Get a ${key} circle`);
        return circle;
    }
}




