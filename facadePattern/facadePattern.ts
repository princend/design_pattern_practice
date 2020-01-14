import { NoobEmployee } from "./NoobEmployee";
import { GoodEmployee } from "./GoodEmployee";

export class Facade {
    public noobEmp1: NoobEmployee = new NoobEmployee('Amy');
    public noobEmp2: NoobEmployee = new NoobEmployee('Ben');
    public goodEmp1: GoodEmployee = new GoodEmployee('Tom');
    public goodEmp2: GoodEmployee = new GoodEmployee('Eve');
    rewardGoodEmployee(): void {
        this.goodEmp1.reward();
        this.goodEmp2.reward();
    }
    punishNoobEmployee(): void {
        this.noobEmp1.punished();
        this.noobEmp2.punished();
    }
}