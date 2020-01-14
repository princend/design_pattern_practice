import { Dispatcher } from "./Dispatcher";
export class Action {
    private dispatcher: Dispatcher;
    constructor(dispatcher: Dispatcher) {
        this.dispatcher = dispatcher;
    }
    changeState(str: string) {
        this.dispatcher.dispatch(str);
    }
}
