class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}



class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }

    deacivate() {
        this.isActive = false;
    }
}




class SmartObject implements Disposable, Activatable {
    isActive: boolean = false;
    isDisposed: boolean = false;

    /** */
    constructor() {
        setInterval(() => console.log(this.isActive + ':' + this.isDisposed), 500)
    }



    interact() { this.activate() };

    activate(): void {

    }

    deacivate(): void {

    }

    dispose(): void {

    }

}



// function applyMixins(derivedCtor: any, baseCtors: any[]) {

//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             Object.defineProperty(derivedCtor.prototype, name,
//                 Object.getOwnPropertyDescriptor(baseCtor.prototype, name))
//         })

//     })

// }


// applyMixins(SmartObject, [Disposable, Activatable]);

let smartObj = new SmartObject();
// setTimeout(() => smartObj.interact(), 1000);

console.log(smartObj)