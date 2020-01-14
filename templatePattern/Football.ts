import { Game } from "./game";
export class Football extends Game {
    initialize(): void {
        console.log('fooball init');
    }
    startPlay(): void {
        console.log('fooball startplay');
    }
    endPlay(): void {
        console.log('fooball endplay');
    }
}
