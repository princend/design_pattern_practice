function extend<First, Second>(first: First, second: Second): First & Second {
    let result: Partial<First & Second> = {};


    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (<First>result)[prop] = first[prop];

        }
    }

    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (<Second>result)[prop] = second[prop];
        }
    }

    return <First & Second>result;
}


export class Person {
    /** */
    constructor(public name: string) {
    }
}


interface Loggagle {
    log(name: string): void;
}

class ConsoleLogger implements Loggagle {
    log(name) {
        console.log(`hello, ${name}`);
    }
}


const Jim = extend(new Person('Jim'), ConsoleLogger.prototype)


Jim.log('JIM')