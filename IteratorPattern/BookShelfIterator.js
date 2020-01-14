"use strict";
exports.__esModule = true;
var BookShelfIterator = /** @class */ (function () {
    function BookShelfIterator(bookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }
    BookShelfIterator.prototype.hasNext = function () {
        if (this.index < this.bookShelf.getLength()) {
            return true;
        }
        else {
            return false;
        }
    };
    BookShelfIterator.prototype.next = function () {
        var book = this.bookShelf.getBook(this.index);
        this.index++;
        return book;
    };
    return BookShelfIterator;
}());
exports.BookShelfIterator = BookShelfIterator;
