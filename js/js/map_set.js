const m = new Map();

m.set("하나", 1);
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);
console.log(m); // {'하나' => 1, 1 => '하나', true => 1, false => 0}
console.log(m.get("하나")); // 1

for (val of m) {
  console.log(`key: ${val[0]}`);
  console.log(`value: ${val[1]}`);
}

// 순회 가능한지(이터러블 가능한지)
console.log(typeof m[Symbol.iterator]); // function
let obj = { a: 1 };
console.log(obj[Symbol.iterator]); // undefined

console.log(m.keys()); // {'하나', 1, true, false}
console.log(m.values()); // {1, '하나', 1, 0}
console.log(m.entries()); // {'하나' => 1, 1 => '하나', true => 1, false => 0}
console.log(m.has(1)); // true
console.log(m.delete(1)); // true
console.log(m.has(1)); // false
console.log(m.get(1)); // undefined

// map 크기
console.log(m.size); // 3

// map 초기화
console.log(m.clear());
console.log(m); // Map(0) {size: 0}

// 인덱스를 가지는 자료형을 맵핑
let temp = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
]);

console.log(temp); // {1 => 2, 3 => 4, 5 => 6}

const map = new Map();
map.set([1, 2], 1);
console.log(map.get[(1, 2)]); // undefined
const a = [1, 2];
map.set(a, 100);
console.log(map.get(a)); // 100

// Set
// 중복값은 제거됨
const s = new Set("eselfsefsseeeee");
console.log(s); // {'e', 's', 'l', 'f'}

let ss = new Set("assa".split(""));
console.log(ss); // {'a', 's'}
ss.add("fes"); 
console.log(`ss:`,ss)// {'a', 's', 'fes'}

for(el of ss) {
    console.log(`ss 순회 값: ${el}`);
}
/*
ss 순회 값: a
ss 순회 값: s
ss 순회 값: fes
*/

ss.delete("a");
console.log(ss); // {'s', 'fes'}
console.log(ss.has("a")); // false
ss.clear();
console.log(ss); // Set(0) {size: 0}

let s1 = new Set([1, 2, 3]);
let s2 = new Set([1, 2, 4]);

// 교집합
const cro = [...s1].filter((el) => s2.has(el));
console.log(new Set(cro)); // {1, 2}

// 합집합
const union = new Set([...s1].concat(...s2));
console.log(union); // {1, 2, 3, 4}

// 차집합
const dif = [...s1].filter((el) => !s2.has(el));
console.log(new Set(dif)); // {3}

// 연습문제
const 회사게시판 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];

// 1.
const board = new Set(회사게시판);
console.log(board.size); // 3

// 2.
let boardMap = new Map();
for (el of 회사게시판) {
  boardMap.set(el, 회사게시판.filter((item) => el === item).length);
}

console.log(boardMap);
