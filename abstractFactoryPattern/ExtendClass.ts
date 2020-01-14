interface PropertyBase<T> {
    properyName: string;
    value?: T;
}

export class ExtendClass {
    constructor() { }

    createProperty(prop: PropertyBase<string>) {
        this[prop.properyName] = prop.value;
    }


}


