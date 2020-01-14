import { Memento } from "./memento";
export class Originator extends Memento {
    setState(state: string) {
        this.state = state;
    }
    saveStateToMemento(): Memento {
        return new Memento(this.state);
    }
    getStateFromMemento(memento: Memento) {
        this.state = memento.getSate();
    }
}
