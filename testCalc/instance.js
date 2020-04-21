var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder() {
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return 'qaq';
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder() {
    }
    StringPadder.prototype.getPaddingString = function () {
        return 'tt';
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ? new SpaceRepeatingPadder() : new StringPadder();
}
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder;
}
if (padder instanceof StringPadder) {
    console.log('padder');
    padder;
}
