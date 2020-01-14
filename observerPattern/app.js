"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var subject_1 = require("./subject");
var subject = new subject_1.Subject();
var Amy = new person_1.Person('Amy', subject);
var Jack = new person_1.Person('Jack', subject);
var Peter = new person_1.Person('Peter', subject);
subject.setState('eat lunch');
