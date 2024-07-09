// Symbol
// ES6
// 대체 키값으로 주로 사용

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1);
console.log(sym2);

let sym3 = Symbol("name");
let sym4 = Symbol("name");
console.log(sym3 === sym4);

const passwordSymbol = Symbol("password");
const user = {
    name: "kim",
    [passwordSymbol]: "0000"
}

console.log(user.passwordSymbol); // undefined