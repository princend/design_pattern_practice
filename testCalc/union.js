"use strict";
exports.__esModule = true;
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error('gg');
}
exports.padLeft = padLeft;
padLeft('jewlllo', 4);
function getSmallPet() {
    var result;
    return result;
}
exports.getSmallPet = getSmallPet;
var pet = getSmallPet();
if (pet) {
    pet.layEggs();
}
;
// pet.swim();
/** error  */
// if(pet.swim){
//     pet.swim();
// }
// else if (pet.fly){
//     pet.fly();
// }
/**use T */
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
