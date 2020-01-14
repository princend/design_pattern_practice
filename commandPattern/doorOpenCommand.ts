import { Command } from "./command";
import { Door } from "./door";

export class DoorOpenCommand implements Command {
    private door: Door;

    constructor(door: Door) {
        this.door = door;
    }

    excute() {
        this.door.open();
    }
}