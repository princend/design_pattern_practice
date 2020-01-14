import { ComputerPart, ComputerPartDisplayVisitor } from "./computerPart";
import { Computer } from "./Computer";

let computer: ComputerPart = new Computer();
computer.accept(new ComputerPartDisplayVisitor());