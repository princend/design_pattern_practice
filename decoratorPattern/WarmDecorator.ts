import { WeaponDecorator } from "./WeaponDecorator";
import { Weapon } from "./weapon";
export class WarmDecorator extends WeaponDecorator {
    constructor(weapon: Weapon) {
        super(weapon);
    }
    attack() {
        super.attack();
        this.warmDecorator();
    }
    private warmDecorator() {
        console.log('warm~');
    }
}
