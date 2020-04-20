class foo {
    private _bar: boolean = false;


    get bar(): boolean {
        return this._bar;
    }

    set bar(value) {

        if (!value) { console.log('not allowed') }
        else {
            this._bar = value;
        }
    }
}




class realFoo extends foo {

    /**
     *
     */
    constructor() {
        super();

        console.log(this.bar)
    }
}




const a = new foo();


a.bar = false;


const b = new realFoo();



