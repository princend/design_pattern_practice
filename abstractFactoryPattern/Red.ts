import { Color } from "./Color";
export class Red implements Color {
    fill(): void {
        console.log('inside red :fill method');
    }
}
