type LinkedList<T> = T & { next: LinkedList<T> };


interface Person {
    name: string
}


var Tom: LinkedList<Person>;
Tom.name;
Tom.next.name;
Tom.next.next.next.next.next.next.next.next.next.next.next.next.next.next.name;
