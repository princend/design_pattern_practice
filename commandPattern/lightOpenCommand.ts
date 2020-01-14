import { Command } from "./command";
import { Light } from "./light";

export class LightOpenCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }
    excute() {
        this.light.on()
    }
}