import { Composition } from "./composition";
import { Battery } from "./Battery";
export class GogoroBattery extends Battery {
    constructor(cp: Composition) {
        super(cp);
    }
    store() {
        this.storeComposition.storePower();
    }
}
