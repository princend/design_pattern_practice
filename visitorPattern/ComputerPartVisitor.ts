import { Keyboard } from "./Keyboard"
import { Mouse } from "./Mouse"
import { Monitor } from "./Monitor"
export interface ComputerPartVisitor {
    visit(keyboard: Keyboard): void;
    visit(mouse: Mouse): void;
    visit(monitor: Monitor): void;
}
