"use strict";
exports.__esModule = true;
var Adapter_1 = require("./Adapter");
var oldplayer_1 = require("./oldplayer");
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer() {
        this.adapterPlayer = new Adapter_1.Adapter(new oldplayer_1.Oldplayer());
    }
    AudioPlayer.prototype.play = function () {
        this.adapterPlayer.play();
    };
    return AudioPlayer;
}());
exports.AudioPlayer = AudioPlayer;
