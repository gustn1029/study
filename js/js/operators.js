// 연산

// 1. 산술 연산
// js는 자동형변환 됨
let x = 10;
let y = 3;

console.log(`x + y = ${x + y}`);
// 피연산자가 모두 숫자이면 숫자 계산, 문자라면 값을 연결
console.log(`x - y = ${x - y}`);
console.log(`x * y = ${x * y}`);
console.log(`x / y = ${x / y}`);
console.log(`x % y = ${x % y}`);
console.log(`x ** y = ${x ** y}`);

// 산술할당연산
/**
 * +=
 * -=
 * *=
 * /=
 * %=
 * **=
 */
let a = 10;
console.log(`a += 20 = ${(a += 20)}`);
console.log(`a -= 7 = ${(a -= 7)}`);
console.log(`a *= 4 = ${(a *= 4)}`);
console.log(`a /= 4 = ${(a /= 4)}`);
console.log(`a %= 7 = ${(a %= 7)}`);
console.log(`a **= 20 = ${(a **= 20)}`);

// 증감연산자
let b = 5;

console.log(`b++ = ${b++}`); // 5 출력 되지만 값은 6
console.log(`++b = ${++b}`); // 7
console.log(`b-- = ${b--}`); // 7 출력 되지만 값은 6
console.log(`--b = ${--b}`); // 5

//비교 연산
/**
 * <
 * <=
 * >
 * >=
 */
let c = 20;
let d = 10;
let e = 20;

console.log(`c > d = ${c > d}`); // ture
console.log(`c >= e = ${c >= e}`); // true
console.log(`c < d = ${c < d}`); // false
console.log(`c <= e = ${c <= e}`); // true

// 동등 ==, 부등 !=, 일치 ===, 불일치 !==
let f = 30;
let g = 31;
let h = "30";

console.log(`(f == 30) = ${f == 30}`); // true
console.log(`(f == g) = ${f == g}`); // false
console.log(`(f == h) = ${f == h}`); // true
console.log(`(f === h) = ${f === h}`); // false
console.log(`(f != 30) = ${f != 30}`); // false
console.log(`(f != g) = ${f != g}`); // true
console.log(`(f != h) = ${f != h}`); // false
console.log(`(f !== h) = ${f !== h}`); // true
console.log(`(null == undefined) =  ${null == undefined}`); // true

let i = { a: 20, b: 30 };
let j = { a: 20, b: 30 };
let k = i;
console.log(i == j); // false
console.log(k == i); // true

console.log([] == []); // false
console.log([] == 0); // true

console.clear();

// 논리 연산자
let age = 20;
// and (&&)
// 왼쪽 피연산자가 truthy면 오른쪽 피연산자로 넘어감
console.log(age > 5 && age < 25); // true
console.log(age > 5 && false && "맞음"); // false
console.log(age > 5 && age < 25 && "맞음"); // 맞음
console.log(123 && true && NaN && null); // NaN

// or (||)
// 왼쪽 피연산자가 falsy면 오른쪽 피연산자로넘어감
console.log(`true || true : ${true || true}`);
console.log(`true || false : ${true || false}`);
console.log(`false || true : ${false || true}`);
console.log(`false || false : ${false || false}`);
console.log(NaN || false || "" || 123 || 3); // 123

// 논리 부정 NOT(!)
console.log(!true); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!1); // false
console.log(!"kim"); // false
console.log(!!"kim"); // true
console.log(!!0); // false

// nullish 연산자 (??)
// 왼쪽 피연산자가 null, undefined인 경우에만 오른쪽 피연산자로 넘어감
let p = null;
let q = undefined;
let s = 12;
let falsy = "";

console.log(p ?? q ?? s); // 12
console.log(s ?? p ?? q); // 12
console.log(p ?? s ?? q); // 12
console.log(p ?? q); //  undefined
console.log(q ?? p); //  null

console.log(falsy ?? s); // ""
console.log(falsy || s); // 12


// 옵셔널 체이닝 (?.)
const obj = {
    "name": "현수",
    "gender": "남자",
    sayHello() {
        console.log("Hello world");
    },
};

console.log(obj.age) // undefined
console.log(obj.age.number) // error
console.log(obj.age?.number) // undefined
console.log(obj?.hi()); // error
console.log(obj.hi?.()) // undefined

// 형 변환
// string
// String()
console.log(String(1));
console.log(String(null));
console.log(String(NaN));
console.log(String(undefined));

// .toString()
console.log((3).toString()); // 3
console.log(new Date().toString()); // Wed Jul 10 2024 14:29:56 GMT+0900 (한국 표준시)
console.log(NaN.toString()); // NaN
// console.log(null.toString()) // error
// console.log(undefined.toString()) // error
console.log((3).toString(2)) // 11

// + ""
console.log(typeof (3 + "")); // string
console.log(typeof (null + "")); // string

// number
// Number()
console.log(Number("3")); // 3
console.log(Number("hi")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// 더하기 연산자
console.log(+"3"); // 3
console.log(+"hi"); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN

// * 1
console.log("3" * 1); // 3
console.log("hi" * 1); // NaN
console.log(true * 1); // 1
console.log(false * 1); // 0
console.log(null * 1); // 0
console.log(undefined * 1); // NaN


// boolean
// Boolean()
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("false")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false

// 부정 논리 연산 2번 사용 (!!)
console.log(!!33); // true
console.log(!!0); // false
console.log(!!"hello"); // true
console.log(!!null); // false
console.log(!!undefined); // false