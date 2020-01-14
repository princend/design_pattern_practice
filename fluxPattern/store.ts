
export class Store {
    private state = '';

    public getState(): string {
        return this.state;
    }

    changeState(str: string): void {
        this.state = str;
    }

}



