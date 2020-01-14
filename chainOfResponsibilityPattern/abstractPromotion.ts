export abstract class AbstractPromotion {
    protected promotionCombo: string[] = [];
    protected nextPromotion: AbstractPromotion;

    constructor(combo: string[]) {
        this.promotionCombo = combo
    }

    setNextPromotion(nextPromotion: AbstractPromotion): void {
        this.nextPromotion = nextPromotion
    }

    protected compareArray(arrA: string[], arrB: string[]): boolean {
        return arrB.length == (arrA.filter(a => arrB.filter(b => a === b)[0])).length
    }

    usePromotion(goods: Array<string>): void {
        if (this.compareArray(goods, this.promotionCombo)) {
            this.use();
        }
        if (this.nextPromotion != null) {
            this.nextPromotion.usePromotion(goods)
        } else {
            console.log('check out');
        }
    }

    abstract use(): void;
}


