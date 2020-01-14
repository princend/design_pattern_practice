"use strict";
exports.__esModule = true;
var BookShelf_1 = require("./BookShelf");
var Book_1 = require("./Book");
var bookShelf = new BookShelf_1.BookShelf();
bookShelf.appendBook(new Book_1.Book('A'));
bookShelf.appendBook(new Book_1.Book('B'));
bookShelf.appendBook(new Book_1.Book('C'));
var it = bookShelf.iterator();
while (it.hasNext()) {
    console.log(it.next().getName());
}
