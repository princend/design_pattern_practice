import { Player } from "./Player";
export class Adapter implements Player {
    private oldPlayer;
    constructor(typePlayer) {
        this.oldPlayer = typePlayer;
    }
    play(): void {
        this.oldPlayer.playTheMusicPlease('oldsetting');
    }
}
