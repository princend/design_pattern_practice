"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(mediator, name) {
        this.mediator = mediator;
        this.name = name;
    }
    Person.prototype.told = function (message) {
        console.log(this.name + " \u6536\u5230\u8A0A\u606F:" + message);
    };
    Person.prototype.sendHireDesicion = function (message, isHired) {
        this.mediator.talkTo('Amy', "" + message + (isHired ? ',congratulation' : ',sorry'));
    };
    return Person;
}());
exports.Person = Person;
