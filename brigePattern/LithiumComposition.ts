import { Composition } from "./composition";
export class LithiumComposition implements Composition {
    storePower(): void {
        console.log('storing in LithiumBattery');
    }
}
