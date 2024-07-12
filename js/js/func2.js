// 함수 심화
// 구조분해할당
let me = {
  name: "bruce",
  age: 20,
  email: "bruce@gmail.com",
};

const func1 = ({ name, email }) => {
  return `이름: ${name}, 이메일: ${email}`;
};

console.log(func1(me)); // 이름: bruce, 이메일: bruce@gmail.com

// 함수에서 객체를 인자로 전달받는 방법
let bruce = {
  name: "bruce",
  age: 40,
  email: "bruce@gmail.com",
};

function func2({ name, age, email }) {
  return `이름: ${name}, 나이:  ${age}, 이메일: ${email}`;
}

console.log(func2(bruce)); // 이름: bruce, 나이:  40, 이메일: bruce@gmail.com

// rest 문법
function 함수1(a, b, ...c) {
  console.log(`${a}, ${b}`);
  console.log(c);
  return Math.max(...c);
}

console.log(함수1("Hello", "world", 1, 2, 3, 4, 5));
/* 
    Hello, world
    [1, 2, 3, 4, 5]
    5
 */

// 매개변수 초기화
function func3(a = 3, b = 2, c = 10) {
  return a + b + c;
}

console.log(func3()); // 15
console.log(func3((c = 100))); // 112

// 자바스크립트 스코프

const func4 = ()=> {
    var a = 2;
    var b = 3;

    return a + b;
}

var a = 20;

console.log(func4());