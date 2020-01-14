"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.person1 = new Person_1.Person(this, 'Amy');
        this.person2 = new Person_1.Person(this, 'Ben');
    }
    Mediator.prototype.talkTo = function (who, message) {
        if (this.person1.name == who) {
            this.person1.told(message);
        }
        if (this.person2.name = who) {
            this.person2.told(message);
        }
    };
    return Mediator;
}());
exports.Mediator = Mediator;
