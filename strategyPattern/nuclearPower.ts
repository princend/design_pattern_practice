import { Strategy } from "./strategy";
export class NuclearPower implements Strategy {
    operation(): void {
        console.log('so terrible ,but eletric power is coming');
    }
    getName(): string {
        return 'NuclearPower'
    }
}