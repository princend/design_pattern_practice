import { Observer } from "./observer";

export class Subject {
    private list: Array<Observer> = [];
    private state: string;

    constructor() { }

    attach(observer: Observer) {
        this.list.push(observer);
    }

    setState(state) {
        this.state = state;
        this.notifyAll();
    }

    getState(): string {
        return this.state;
    }

    notifyAll() {
        this.list.forEach(observer => observer.update());
    }

}