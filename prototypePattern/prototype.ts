export class Prototype {

    constructor() {
        console.log('hello');
    }

    clone(): Prototype {
        let cloned = Object.create(Prototype.prototype || null);
        return cloned;
    }
}