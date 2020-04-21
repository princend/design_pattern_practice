var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === 'ease-in') { }
        else if (easing = "ease-out") { }
        else if (easing = "ease-in-out") { }
        else { }
        ;
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0,0,"uneasy"); error not acept uneasy;
function rollDice() {
    var a;
    var ran = Math.ceil(Math.random() * 6);
    if (ran === 1) {
        a = 1;
    }
    else if (ran === 2) {
        a = 2;
    }
    else if (ran === 3) {
        a = 3;
    }
    else if (ran === 4) {
        a = 4;
    }
    else if (ran === 5) {
        a = 5;
    }
    else if (ran === 6) {
        a = 6;
    }
    return a;
}
console.log(rollDice());
