import { Mediator } from "./mediator";

export class Person {
    public name: string;
    public mediator: Mediator;
    constructor(mediator: Mediator, name: string) {
        this.mediator = mediator;
        this.name = name;
    }

    public told(message): void {
        console.log(`${this.name} 收到訊息:${message}`);
    }

    public sendHireDesicion(message, isHired): void {
        this.mediator.talkTo('Amy', `${message}${isHired ? ',congratulation' : ',sorry'}`)
    }
}