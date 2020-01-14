import { Person } from "./Person";

export class Mediator {
    person1: Person;
    person2: Person;

    constructor() {
        this.person1 = new Person(this, 'Amy')
        this.person2 = new Person(this, 'Ben')
    }


    public talkTo(who: string, message: string): void {
        if (this.person1.name == who) {
            this.person1.told(message)
        }
        if (this.person2.name = who) {
            this.person2.told(message)
        }
    }
}