import { Composite } from "./composite";
import { Circle } from "./circle";
import { Square } from "./square";
import { ShapeDiagram } from "./shapeDiagram";

let diagram: Composite = new ShapeDiagram();
let circle1: Composite = new Circle();
diagram.add(circle1);
let square1 = new Square();
diagram.add(square1);
let circle2 = new Circle();
diagram.add(circle2);
diagram.draw();
diagram.remove(square1)
diagram.draw();
