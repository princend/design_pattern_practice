import { BookShelf } from "./BookShelf";
import { Book } from "./Book";
import { Iterator } from "./Iterator";

let bookShelf: BookShelf = new BookShelf();
bookShelf.appendBook(new Book('A'))
bookShelf.appendBook(new Book('B'))
bookShelf.appendBook(new Book('C'))

let it: Iterator = bookShelf.iterator();

while (it.hasNext()) {
    console.log((<Book>it.next()).getName());
}