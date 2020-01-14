import { Expression } from "./expression";
import { TerminalExpression } from "./TerminalExpression";
import { OrExpression } from "./OrExpression";
import { AndExpression } from "./AndExpression";

function getMaleExpression(): Expression {
    let Robert: Expression = new TerminalExpression('Robert');
    let John: Expression = new TerminalExpression('John');
    return new OrExpression(Robert, John)
}


function getMarriedWomanExpression() {
    let May: Expression = new TerminalExpression('May');
    let married: Expression = new TerminalExpression('married')
    return new AndExpression(May, married)
}

let isMale: Expression = getMaleExpression();
let isMarriedWoman: Expression = getMarriedWomanExpression();
console.log('John is male?' + isMale.interpret('John'));
console.log('May is a married woman' + isMarriedWoman.interpret('married May'));

