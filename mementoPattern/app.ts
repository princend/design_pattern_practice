import { Originator } from "./Originator";
import { CareTaker } from "./CareTaker";

let originator: Originator = new Originator();
let careTaker: CareTaker = new CareTaker();

originator.setState('State #1');
originator.setState('State #2');
careTaker.add(originator.saveStateToMemento());
originator.setState('State #3');
careTaker.add(originator.saveStateToMemento());

originator.setState('State #4');
console.log('current sate :' + originator.getSate());

originator.getStateFromMemento(careTaker.get(0))

console.log('first saved state :' + originator.getSate());

