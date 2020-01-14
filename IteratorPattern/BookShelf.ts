import { Iterator } from "./Iterator";
import { Book } from "./Book";
import { Aggregate } from "./aggregate";
import { BookShelfIterator } from "./BookShelfIterator";
export class BookShelf implements Aggregate {
    private books: Book[] = [];
    private count: number;
    constructor() {
        this.count = 0;
    }
    getBook(index: number): Book {
        return this.books[index];
    }
    appendBook(book: Book): void {
        this.books.push(book);
        this.count++;
    }
    getLength(): number {
        return this.count;
    }
    iterator(): Iterator {
        return new BookShelfIterator(this);
    }
}
