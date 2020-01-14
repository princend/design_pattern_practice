import { ComputerPartVisitor } from "./ComputerPartVisitor"
import { Computer } from "./Computer";
import { Mouse } from "./Mouse";
import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";

export interface ComputerPart {
    accept(computerPartVisitor: ComputerPartVisitor): void;
}


export class ComputerPartDisplayVisitor implements ComputerPartVisitor {

    visit(part: ComputerPart): void {
        let partType = part.constructor.toString().match(/\w+/g)[1];
        this[`${partType}Visit`](part);
    }

    ComputerVisit(computer: Computer) {
        console.log('displaycomputer' + computer);
    }
    MouseVisit(mouse: Mouse) {
        console.log('displaymouse' + mouse);
    }

    KeyboardVisit(keyboard: Keyboard) {
        console.log('displaykeyboard' + keyboard);
    }

    MonitorVisit(monitor: Monitor) {
        console.log('displaymonitor' + monitor);
    }
}



