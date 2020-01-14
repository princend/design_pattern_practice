import { Command } from "./command";
import { Light } from "./light";

export class LightCloseCommand implements Command {
    private light: Light;
    constructor(light: Light) {
        this.light = light;
    }
    excute() {
        this.light.off()
    }
}