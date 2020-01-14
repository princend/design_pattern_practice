import { Game } from "./game";
export class Cricket extends Game {
    initialize(): void {
        console.log('cricket initializing');
    }
    startPlay(): void {
        console.log('cricket startplaying...');
    }
    endPlay(): void {
        console.log('cricket endplaying...');
    }
}
