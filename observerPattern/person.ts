import { Observer } from "./observer";
import { Subject } from "./subject";

export class Person implements Observer {
    name: string;
    subject: Subject;
    /**
     *
     */
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this)
    }
    update() {
        console.log(this.name + ':get updating');
        console.log(this.name + ':get new state');
        console.log(this.name, ':new state:' + this.subject.getState());
    }
}