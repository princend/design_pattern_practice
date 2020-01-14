import { Store } from "./store";
import { Dispatcher } from "./Dispatcher";
import { Action } from "./Action";
import { View } from "./View";

let store: Store = new Store();
let dispatcher: Dispatcher = new Dispatcher(store);
let action: Action = new Action(dispatcher);
let view: View = new View(store, action);

view.setMyState('flux')
view.display();