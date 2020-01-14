"use strict";
exports.__esModule = true;
var Adapter = /** @class */ (function () {
    function Adapter(typePlayer) {
        this.oldPlayer = typePlayer;
    }
    Adapter.prototype.play = function () {
        this.oldPlayer.playTheMusicPlease('oldsetting');
    };
    return Adapter;
}());
exports.Adapter = Adapter;
