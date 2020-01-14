class SingletonDB {
    private static _instance: SingletonDB = null;
    private constructor() { }


    public static getInstanceDB() {
        return this._instance || (this._instance = new this());
    }


    public getInfo(): string {
        return `I'm unique`;
    }

}


let onlyOneDB = SingletonDB.getInstanceDB();

console.log(onlyOneDB.getInfo(), '唯一');


let onlyOneDB_A = SingletonDB.getInstanceDB();



console.log(onlyOneDB == onlyOneDB_A, '相等')



