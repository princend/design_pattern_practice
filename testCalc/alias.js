function getName(n) {
    if (typeof n === 'string') {
        console.log('im string');
        return n;
    }
    else {
        console.log('im fn');
        return n();
    }
}
var qq = 'def';
var tt = function () { return 'abc'; };
getName(qq);
getName(tt);
