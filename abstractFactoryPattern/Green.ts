import { Color } from "./Color";
export class Green implements Color {
    fill(): void {
        console.log('inside Green :fill method');
    }
}
