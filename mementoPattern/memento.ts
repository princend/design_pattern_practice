export class Memento {
    protected state: string;

    constructor(state?: string) {
        state ? this.state = state : false;
    }

    getSate(): string {
        return this.state;
    }
}




