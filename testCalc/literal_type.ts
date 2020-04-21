type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') { }
        else if (easing = "ease-out") { }
        else if (easing = "ease-in-out") { }
        else { };
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0,0,"uneasy"); error not acept uneasy;




function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    let a: 1 | 2 | 3 | 4 | 5 | 6
    const ran = Math.ceil(Math.random() * 6);
    if (ran === 1) { a = 1 }
    else if (ran === 2) { a = 2 }
    else if (ran === 3) { a = 3 }
    else if (ran === 4) { a = 4 }
    else if (ran === 5) { a = 5 }
    else if (ran === 6) { a = 6 }
    return a

}



console.log(rollDice())



function foo1(x: number) {
    // if(x!==1||x!==2){
    // }
}



