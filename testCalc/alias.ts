type Name = string;
type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        console.log('im string');

        return n
    }
    else { console.log('im fn'); return n() }
}

var qq: NameOrResolver = 'def';
var tt: NameOrResolver = () => 'abc'
// var zz: NameOrResolver = 123;

getName(qq);
getName(tt);