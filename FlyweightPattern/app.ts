import { ShapeFactory } from "./ShapeFactory";
import { Shape } from "./Shape";


let greenCircle: Shape = ShapeFactory.getCircle('Green');
let greenCircle2: Shape = ShapeFactory.getCircle('Green');
let YellowCircle: Shape = ShapeFactory.getCircle('Yellow');
let RedCircle: Shape = ShapeFactory.getCircle('Red');
let YellowCircle2: Shape = ShapeFactory.getCircle('Yellow');


greenCircle.draw();
greenCircle2.draw();
YellowCircle.draw();
YellowCircle2.draw();
RedCircle.draw();

