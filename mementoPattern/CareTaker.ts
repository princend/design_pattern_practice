import { Memento } from "./memento";
export class CareTaker {
    private list: Memento[] = [];
    add(state: Memento) {
        this.list.push(state);
    }
    get(index: number): Memento {
        return this.list[index];
    }
}
