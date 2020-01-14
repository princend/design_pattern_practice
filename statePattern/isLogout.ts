import { State } from "./state";
import { Person } from "./person";


export class IsLogout implements State {

    private person: Person;
    constructor(p: Person) {
        this.person = p;
    }

    public chat(): void {
        console.log('pls login');
    }

    public login(): void {
        console.log(`login ...`);
        this.person.setState(this.person.getisLoginState());
    }

    public logout(): void {
        console.log(`you're already out ...`);
    }


}