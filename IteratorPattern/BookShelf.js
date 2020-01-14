"use strict";
exports.__esModule = true;
var BookShelfIterator_1 = require("./BookShelfIterator");
var BookShelf = /** @class */ (function () {
    function BookShelf() {
        this.books = [];
        this.count = 0;
    }
    BookShelf.prototype.getBook = function (index) {
        return this.books[index];
    };
    BookShelf.prototype.appendBook = function (book) {
        this.books.push(book);
        this.count++;
    };
    BookShelf.prototype.getLength = function () {
        return this.count;
    };
    BookShelf.prototype.iterator = function () {
        return new BookShelfIterator_1.BookShelfIterator(this);
    };
    return BookShelf;
}());
exports.BookShelf = BookShelf;
