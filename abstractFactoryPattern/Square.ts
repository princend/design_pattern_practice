import { Shape } from "./shape";
export class Square implements Shape {
    draw(): void {
        console.log('inside square :draw() method.');
    }
}
