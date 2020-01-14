var SingletonDB = /** @class */ (function () {
    function SingletonDB() {
    }
    SingletonDB.getInstanceDB = function () {
        return this._instance || (this._instance = new this());
    };
    SingletonDB.prototype.getInfo = function () {
        return "I'm unique";
    };
    SingletonDB._instance = null;
    return SingletonDB;
}());
var onlyOneDB = SingletonDB.getInstanceDB();
console.log(onlyOneDB.getInfo(), '唯一');
var onlyOneDB_A = SingletonDB.getInstanceDB();
console.log(onlyOneDB == onlyOneDB_A, '相等');
