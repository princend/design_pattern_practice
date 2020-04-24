import { Proxify, Proxy } from "./mapped_type";

function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

let name1: Proxy<string> = { get: () => 'john', set: () => { } }
let password1: Proxy<string> = { get: () => '123456', set: () => { } }
var proxyProps = { name: name1, password: password1 }
let ogProps = unproxify(proxyProps);


console.log(ogProps)