import { Strategy } from "./strategy";
import { Battery } from "./Battery";
import { FirePower } from "./FirePower";
import { NuclearPower } from "./nuclearPower";
import { WaterPower } from "./waterPower";


let gogoroBattery: Battery = new Battery();
gogoroBattery.setPowerStrategy(new FirePower());
gogoroBattery.charge();
gogoroBattery.discharge()
console.log('go to recharge');

gogoroBattery.setPowerStrategy(new NuclearPower());
gogoroBattery.charge()
gogoroBattery.discharge()
console.log('go to recharge');

gogoroBattery.setPowerStrategy(new WaterPower());
gogoroBattery.charge();
gogoroBattery.discharge();

