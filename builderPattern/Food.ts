import { Component } from "./component";
export class Food {
    componentList: Component[] = [];
    addComponent(component: Component): void {
        this.componentList.push(component);
    }
    getDetail(): void {
        this.componentList.forEach(c => console.log(c.getTaste()));
    }
}
