"use strict";
exports.__esModule = true;
var TerminalExpression_1 = require("./TerminalExpression");
var OrExpression_1 = require("./OrExpression");
var AndExpression_1 = require("./AndExpression");
function getMaleExpression() {
    var Robert = new TerminalExpression_1.TerminalExpression('Robert');
    var John = new TerminalExpression_1.TerminalExpression('John');
    return new OrExpression_1.OrExpression(Robert, John);
}
function getMarriedWomanExpression() {
    var May = new TerminalExpression_1.TerminalExpression('May');
    var married = new TerminalExpression_1.TerminalExpression('married');
    return new AndExpression_1.AndExpression(May, married);
}
var isMale = getMaleExpression();
var isMarriedWoman = getMarriedWomanExpression();
console.log('John is male?' + isMale.interpret('John'));
console.log('May is a married woman' + isMarriedWoman.interpret('married May'));
