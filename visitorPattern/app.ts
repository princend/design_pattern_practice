import { ComputerPart, ComputerPartDisplayVisitor } from "./computerPart";
import { Computer } from "./Computer";
import { aaa } from "../testCalc/calc";
let computer: ComputerPart = new Computer();
computer.accept(new ComputerPartDisplayVisitor());
