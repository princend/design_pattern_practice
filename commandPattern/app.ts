import { Command } from "./command";
import { Door } from "./door";
import { Light } from "./light";
import { DoorOpenCommand } from "./doorOpenCommand";
import { LightOpenCommand } from "./lightOpenCommand";
import { LightCloseCommand } from "./lightCloseCommand";
import { DoorCloseCommand } from "./doorCloseCommand";

let commandList: Array<Command> = [];
let door = new Door();
let light = new Light();
commandList.push(new DoorOpenCommand(door));
commandList.push(new LightOpenCommand(light));
commandList.push(new LightCloseCommand(light));
commandList.push(new DoorCloseCommand(door));


commandList.forEach(command => command.excute())