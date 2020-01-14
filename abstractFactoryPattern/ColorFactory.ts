import { AbstracFactory } from "./AbstracFactory";
import { Color } from "./Color";
import { Red } from "./Red";
import { Green } from "./Green";
import { Shape } from "./shape";
export class ColorFactory extends AbstracFactory {
    getShape(type: string): Shape {
        return null;
    }
    getColor(type: string): Color {
        if (type == 'Red') {
            return new Red();
        }
        else if (type == 'Green') {
            return new Green();
        }
    }
}
