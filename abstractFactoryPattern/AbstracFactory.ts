import { Color } from "./Color";
import { Shape } from "./shape";
export abstract class AbstracFactory {
    abstract getColor(type: string): Color;
    abstract getShape(type: string): Shape;
}





