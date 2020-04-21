function f(sn: string | null): string {
    return sn || 'default';
}


function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '. the' + epithet;
    }
    name = name || 'No Name';
    return postfix("great");
}


function fixed(name: string | null): string {
    function postfix(epithec: string) {
        return name!.charAt(0) + '. the ' + epithec;

    }
    name = name || 'No Name';
    return postfix("great");

}
