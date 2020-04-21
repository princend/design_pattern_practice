export function padLeft(value: string, padding: number | string) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }

    if (typeof padding === "string") {
        return padding + value
    }
    throw new Error('gg')
}

padLeft('jewlllo', 4);






interface Oviparous {
    layEggs();
}

interface Bird extends Oviparous {
    fly();
}

interface Fish extends Oviparous {
    swim();
}



export function getSmallPet(): Fish | Bird {
    let result: Bird | Fish;

    return result;

}




let pet = getSmallPet();

if (pet) { pet.layEggs() };
// pet.swim();



/** error  */
// if(pet.swim){
//     pet.swim();
// }
// else if (pet.fly){
//     pet.fly();
// }


/**use T */
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
} else {
    (<Bird>pet).fly();
}
