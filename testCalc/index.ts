function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}




interface Person {
    name: string;
    age: number;
}

let jarid: Person = {
    name: 'Jarid',
    age: 35
}


let strings: string[] = pluck(jarid, ['name']);



console.log(strings, 'hello');


// interface Point {
//     x: number;
//     y: number;

// }
// type keys = keyof Point;
// let aaa: keys = 'y';
// console.log(aaa)




interface Dictionary<T> {
    [key: string]: T;
}
let keys: keyof Dictionary<number>;
console.log(keys, 'keys')


let value: Dictionary<number>['foo'];
console.log(value, 'value');
