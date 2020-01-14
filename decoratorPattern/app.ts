import { knife } from "./knife";
import { WarmDecorator } from "./WarmDecorator";
import { WeaponDecorator } from "./WeaponDecorator";

let myKnife = new knife();
myKnife.attack();
console.log('');
let myKnife_lv2: WeaponDecorator = new WarmDecorator(myKnife)

myKnife_lv2.attack();
console.log('');

