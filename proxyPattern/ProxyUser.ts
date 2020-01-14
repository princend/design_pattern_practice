import { AccountUser } from "./accountUser";
import { User } from "./user";
export class ProxyUser implements User {
    private accountUser: User;
    private existuser: User = new AccountUser('1234');
    private accountToken: string;
    constructor(token: string) {
        this.accountToken = token;
    }
    chat(): void {
        if (!this.authCheck(this.accountToken)) {
            this.accountUser = new AccountUser(this.accountToken);
            console.log('create auth token');
            this.accountUser.chat();
        }
        else {
            console.log('existing auth token');
            this.existuser.chat();
        }
    }
    private authCheck(token: string): boolean {
        return token === '1234';
    }
}
