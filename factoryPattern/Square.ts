import { Shape } from "../FlyweightPattern/Shape";

export class Square implements Shape {
    draw(): void {
        console.log('draw a square');
    }
}