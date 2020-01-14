import { Weapon } from "./weapon";
export abstract class WeaponDecorator implements Weapon {
    decoratorWeapon: Weapon;
    constructor(weapon: Weapon) {
        this.decoratorWeapon = weapon;
    }
    attack() {
        this.decoratorWeapon.attack();
    }
}
