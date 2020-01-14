import { Composition } from "./composition";
export abstract class Battery {
    protected storeComposition: Composition;
    constructor(storeComposition: Composition) {
        this.storeComposition = storeComposition;
    }
    abstract store(): void;
}
