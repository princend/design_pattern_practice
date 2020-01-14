import { Shape } from "./shape";
export class Rectangle implements Shape {
    draw(): void {
        console.log('inside rectangle :draw() method');
    }
}
