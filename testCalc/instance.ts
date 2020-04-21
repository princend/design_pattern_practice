interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {

    constructor() {
    }

    getPaddingString(): string {
        return 'qaq'
    }

}


class StringPadder implements Padder {
    getPaddingString(): string {
        return 'tt'
    }
}


function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder() : new StringPadder();
}


let padder: Padder = getRandomPadder();


if (padder instanceof SpaceRepeatingPadder) {
    padder
}
if (padder instanceof StringPadder) {
    console.log('padder')
    padder;
}


