import { Player } from "./Player";
import { Adapter } from "./Adapter";
import { Oldplayer } from "./oldplayer";
export class AudioPlayer implements Player {
    private adapterPlayer;
    constructor() {
        this.adapterPlayer = new Adapter(new Oldplayer());
    }
    play(): void {
        this.adapterPlayer.play();
    }
}
