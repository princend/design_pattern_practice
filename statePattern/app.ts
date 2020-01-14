import { Person } from "./person";

let person: Person = new Person();

person.chat();
person.login();
person.chat();
person.login();
person.logout();

person.getState();