import { State } from "./state";
import { IsLogin } from "./isLogin";
import { IsLogout } from "./isLogout";
export class Person {
    private isLogin: State;
    private isLogout: State;
    private state: State;

    constructor() {
        this.isLogin = new IsLogin(this);
        this.isLogout = new IsLogout(this);
        this.state = this.isLogout;
    }

    chat() {
        this.state.chat();
    }

    login() {
        this.state.login();
    }

    logout() {
        this.state.logout();
    }

    // 取得登入狀態
    getisLoginState() {
        return this.isLogin;
    }

    // 取得登出狀態
    getisLogoutState() {
        return this.isLogout;
    }

    public getState(): State {
        return this.state;
    }

    setState(s: State) {
        this.state = s;
    }
}