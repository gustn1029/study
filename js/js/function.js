// 함수
/*
function 함수이름(파라미터) {
    함수 기능 코드

    return 반환값
} 
    함수이름(); // 실행
*/
function sum(num1, num2) {
  let val = num1 + num2;
  return val;
}

console.log(sum(12, 30)); // 42

const obj = { a: 1, b: 2 };
function func1(obj) {
  obj.c = 10;
  obj = { name: "dd" };
  return obj;
}

console.log(func1(obj)); // {name: 'dd'}
console.log(obj); // {a: 1, b: 2, c: 10}

function sumFunc(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "숫자를 입력해주세요.";
  }

  return num1 + num2;
}

console.log(sumFunc("f", 2)); // 숫자를 입력해주세요.
console.log(sumFunc(1, 2)); // 3

// 함수 표현식
const func2 = function () {
  return "func2는 함수 표현식";
};

console.log(func2());

// arrow function
const arrowFunc = () => {
  return "arrow function 입니다.";
};

console.log(arrowFunc());

let arr = [1, 2, 3, 4, 5];
const func3 = arr.map(function (el, idx) {
  return el + idx;
});

const func4 = arr.map((el, idx) => {
  return el + idx;
});

console.log(func3); // [1, 3, 5, 7, 9]
console.log(func4); // [1, 3, 5, 7, 9]

// 즉시 실행 함수
(function () {
  console.log("즉시 실행 함수");
})(); // 즉시 실행 함수

const iifeFunc = (() => {
  console.log("즉시 실행 함수");
})(); // 즉시 실행 함수
