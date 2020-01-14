import { Strategy } from "./strategy";
export class FirePower implements Strategy {
    operation(): void {
        console.log('pm2.5');
        console.log('Power Comming');
    }
    getName(): string {
        return 'FirePower';
    }
}



