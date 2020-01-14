import { Action } from "./Action";
import { Store } from "./store";
export class View {
    private action: Action;
    private store: Store;
    constructor(store: Store, action: Action) {
        this.store = store;
        this.action = action;
    }
    display() {
        console.log("state:" + this.getState());
    }
    setMyState(str: string) {
        this.action.changeState(str);
    }
    private getState(): string {
        return this.store.getState();
    }
}
