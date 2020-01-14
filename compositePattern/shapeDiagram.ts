import { Composite } from "./composite";

export class ShapeDiagram implements Composite {
    list: Composite[] = [];
    add(c: Composite): void {
        this.list.push(c);
    }
    remove(c: Composite): void {
        this.list = this.list.filter(item => item !== c);
    }
    draw(): void {
        this.list.forEach(item => item.draw())
    }
}