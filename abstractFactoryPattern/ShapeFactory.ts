import { AbstracFactory } from "./AbstracFactory";
import { Color } from "./Color";
import { Square } from "./Square";
import { Rectangle } from "./Rectangle";
import { Shape } from "./shape";
export class ShapeFactory extends AbstracFactory {
    getColor(type: string): Color {
        return null;
    }
    getShape(type: string): Shape {
        if (type == 'Square') {
            return new Square();
        }
        else if (type == 'Rectangle') {
            return new Rectangle();
        }
    }
}
