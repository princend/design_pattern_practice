import { ComputerPartVisitor } from "./ComputerPartVisitor";
import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";
import { Mouse } from "./Mouse";
import { ComputerPart } from "./computerPart";
export class Computer implements ComputerPart {
    private parts: ComputerPart[];
    constructor() {
        this.parts = [new Keyboard(), new Monitor(), new Mouse()];
    }
    accept(computerPartVisitor: ComputerPartVisitor): void {
        this.parts.forEach(part => part.accept(computerPartVisitor));
        computerPartVisitor.visit(this);
    }
}
