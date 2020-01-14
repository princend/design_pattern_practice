"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    /**
     *
     */
    function Person(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    Person.prototype.update = function () {
        console.log(this.name + ':get updating');
        console.log(this.name + ':get new state');
        console.log(this.name, ':new state:' + this.subject.getState());
    };
    return Person;
}());
exports.Person = Person;
