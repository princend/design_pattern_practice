export class Circle {
    protected static pi: number = 3.14;
    pi2 = 3.1415926;


    aa() {
        return Circle.pi;
    }
}


export class Cir1 extends Circle {
    /**
     *
     */
    constructor() {
        super();
        this.pi2 = 123;
    }
    bb() {
        return Circle.pi;
    }
}


var a = new Cir1();
console.log(a.bb());