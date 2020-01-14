import { Iterator } from "./Iterator";
import { Book } from "./Book";
import { BookShelf } from "./BookShelf";
export class BookShelfIterator implements Iterator {
    private bookShelf: BookShelf;
    private index: number;
    constructor(bookShelf: BookShelf) {
        this.bookShelf = bookShelf;
        this.index = 0;
    }
    hasNext(): boolean {
        if (this.index < this.bookShelf.getLength()) {
            return true;
        }
        else {
            return false;
        }
    }
    next(): Object {
        let book: Book = this.bookShelf.getBook(this.index);
        this.index++;
        return book;
    }
}
