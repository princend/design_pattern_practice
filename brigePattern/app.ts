import { Battery } from "./Battery";
import { GogoroBattery } from "./GogoroBattery";
import { LithiumComposition } from "./LithiumComposition";
import { CarbonComposition } from "./carbonComposition";

let gogoroBattery1: Battery = new GogoroBattery(new LithiumComposition());
let gogoroBattery2: Battery = new GogoroBattery(new CarbonComposition());

gogoroBattery1.store();
gogoroBattery2.store();