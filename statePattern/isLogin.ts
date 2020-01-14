import { State } from "./state";
import { Person } from "./person";


export class IsLogin implements State {

    private person: Person;
    constructor(p: Person) {
        this.person = p;
    }

    public chat(): void {
        console.log('keep online and chatting!!!');
    }

    public login(): void {
        console.log(`you're already in`);
    }

    public logout(): void {

        console.log('logout ...');
        this.person.setState(this.person.getisLogoutState());
    }


}