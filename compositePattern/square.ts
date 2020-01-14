import { Composite } from "./composite";

export class Square implements Composite {
    add(c): void {
        throw new Error(`I can't do it `);
    };

    remove(c): void {
        throw new Error(`I can't do it `);
    };

    draw() {
        console.log('draw a square');
    }

}