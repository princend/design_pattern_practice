import { User } from "./user";
export class AccountUser implements User {
    private accountToken: string;
    constructor(id: string) {
        this.accountToken = id;
    }
    chat(): void {
        console.log('chatting...');
    }
}
