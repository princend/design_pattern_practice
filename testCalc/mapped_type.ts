interface PersonPartial {
    name?: string;
    age?: number;
}

interface PersonReadonly {
    readonly name: string;
    readonly age: number;
}



type Readonly_Test<T> = {
    readonly [P in keyof T]: T[P];
}

type Partial_Test<T> = {
    [P in keyof T]?: T[P];
}



type PersonPartial_Test = Partial<Person>;
type ReadonlyPerson = Readonly_Test<Person>;







type PartialWithNewMember<T> = {
    [P in keyof T]?: T[P];
} & { newMember: boolean; }



let abc: PartialWithNewMember<Person> = { newMember: false, name: 'aaa' }


export type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

export type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}


let monkasName: Proxy<string> = { get: () => 'monkas1', set: () => { } }
let monkasAge: Proxy<number> = { get: () => 6, set: () => { } }
let monkas: Proxify<Person> = { name: monkasName, age: monkasAge }


console.log(monkas.age.get(), 'monkey')

function proxify<T>(o: T): Proxify<T> {
    return;
}


var props = {}
let proxyProps = proxify(props)





type Picker<T, K extends keyof T> = {
    [P in K]: T[P]
}

type Recorder<K extends keyof any, T> = {
    [P in K]: T
}


type ThreeStringProps = Recorder<'prop1' | 'prop2' | 'prop3', string>


let aa:Recorder<'kek1',string>={kek1:'aa'};

let bb: ThreeStringProps = { prop1: '2', prop2: '2', prop3: '2' }