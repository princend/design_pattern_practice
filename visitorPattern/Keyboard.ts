import { ComputerPart } from "./computerPart"
import { ComputerPartVisitor } from "./ComputerPartVisitor";
export class Keyboard implements ComputerPart {
    accept(computerPartVisitor: ComputerPartVisitor): void {
        computerPartVisitor.visit(this);
    }
}
