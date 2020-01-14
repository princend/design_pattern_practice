import { Shape } from "./Shape";

export class Circle implements Shape {
    color: string;
    constructor(color) {
        this.color = color
    }
    public draw() {
        console.log(`draw a ${this.color} circle`);
    }
}