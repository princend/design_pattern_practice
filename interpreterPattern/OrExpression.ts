import { Expression } from "./expression";
export class OrExpression implements Expression {
    private exp1: Expression = null;
    private exp2: Expression = null;
    constructor(exp1: Expression, exp2: Expression) {
        this.exp1 = exp1;
        this.exp2 = exp2;
    }
    interpret(context: any): boolean {
        return this.exp1.interpret(context) || this.exp2.interpret(context);
    }
}
