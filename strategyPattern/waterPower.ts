import { Strategy } from "./strategy";

export class WaterPower implements Strategy {
    operation(): void {
        console.log('watting');
        console.log('eletric power is coming');
    }
    getName(): string {
        return 'WaterPower'
    }
}




