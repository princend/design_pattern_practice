export class GoodEmployee {
    name: string;
    /**
     *
     */
    constructor(name) {
        this.name = name;
    }

    reward(): void {
        console.log(`${this.name} says : yeah~~~ I got reward`);
    }
}
