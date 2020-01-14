import { AbstractPromotion } from "./abstractPromotion";
import { PromotionA } from "./PromotionA";

let promotionA: AbstractPromotion = new PromotionA(['a', 'b'])
let promotionB: AbstractPromotion = new PromotionA(['c', 'b'])
let promotionC: AbstractPromotion = new PromotionA(['e', 'a'])

promotionA.setNextPromotion(promotionB)
promotionB.setNextPromotion(promotionC)

let shoppingCart: string[] = ['a', 'b', 'shie', 'e'];
promotionA.usePromotion(shoppingCart);

