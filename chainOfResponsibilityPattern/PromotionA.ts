import { AbstractPromotion } from "./abstractPromotion";
export class PromotionA extends AbstractPromotion {
    use(): void {
        console.log('promotion A');
    }
}
