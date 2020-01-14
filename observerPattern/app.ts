import { Person } from "./person";
import { Observer } from "./observer";
import { Subject } from "./subject";

let subject: Subject = new Subject();
let Amy: Observer = new Person('Amy', subject);
let Jack: Observer = new Person('Jack', subject)
let Peter: Observer = new Person('Peter', subject)

subject.setState('eat lunch')



