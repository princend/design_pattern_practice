import { Store } from "./store";
export class Dispatcher {
    private store: Store;
    constructor(store: Store) {
        this.store = store;
    }
    dispatch(str: string): void {
        this.store.changeState(str);
    }
}
