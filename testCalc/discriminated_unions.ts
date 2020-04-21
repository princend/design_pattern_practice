
abstract class Square implements Unit {
    kind: "square";
    size: number;
}

abstract class Rectangle implements Unit {
    kind: 'rectangle';
    width: number;
    height: number;

}

abstract class Circle implements Unit {
    kind: "cirlce";
    radius: number;
}

interface Unit {
    kind: string;
}


abstract class Triangle implements Unit {
    kind : 'triangle';
    width: number;
    height: number;
}


type Shape = Square | Rectangle | Circle | Triangle;


function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size ** 2;
        case "rectangle": return s.height * s.width;
        case "cirlce": return Math.PI * s.radius ** 2;
        // default: return assertNever(s);
    }
}

function assertNever(x:never):never {
    throw new Error("Unexpected obj: "+x)
}



const donuts: Circle = { kind: 'cirlce', radius: 8 };


console.log(area(donuts));