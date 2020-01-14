import { Strategy } from "./strategy";
export class Battery {
    private strategy: Strategy;
    setPowerStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }
    charge() {
        console.log(`use ${this.strategy.getName()} to charge`);
        this.strategy.operation();
    }
    discharge() {
        console.log('discharging...');
    }
}
