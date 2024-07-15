let z = 100;
function sum(x) {
  let y = 50;
  z = z + y;
  return x + y;
}
console.log(sum(10)); // 60
// console.log(x); // error
// console.log(y); // error
console.log(z); // 150

function sum1(x, y, 콜백함수){
    콜백함수(x + y);
    return x + y;
  }
  
  function documentWriter(s){
    document.body.innerHTML = `콜백함수 ${s}`;
  }
  sum1(10, 20, documentWriter)

// callback
function func() {
  return console.log("a");
}

const callback = (fn) => {
  return fn();
};

console.log(callback(func)); // a

let arr = [1, 2, 3, 4, 5];
const mapResult = arr.map((el, idx) => sum(el, idx));
console.log(mapResult); // [1, 3, 5, 7, 9]

let newArr = [];
const forEachResult = arr.forEach((el, idx) => newArr.push(sum(el, idx)));
console.log(newArr); // [1, 3, 5, 7, 9]

function sum(x, y) {
  return x + y;
}

// 재귀함수
function factorial(n) {
  if (n <= 1) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 피보나치
function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
    console.log(`a: ${a}, b: ${b}`);
  }
  return b;
}

console.log(fibonacci(10)); // 55

// 1부터 n까지의 합
// for
let num = 0;
for (let i = 0; i <= 5; i++) {
  num += i;
}
console.log(num); // 15

// 재귀함수
function sumFunc(n) {
  if (n <= 1) {
    return n;
  }

  return n + sumFunc(n - 1);
}

console.log(sumFunc(5)); // 15

// 즉시 실행 함수
(function sumFunc() {
  let a = 3;
  let b = 2;

  return console.log(a + b);
})();

// 클로저
function closerFunc() {
    let x = "클로저";

    const text = (name) => {
        return `지금 설정한 ${name} 함수는 ${x} 함수 입니다.`;
    }

    return text;
}

const closer = closerFunc();
console.log(closer("closer")); // 지금 설정한  이 함수는 클로저 함수 입니다.


// 생성자 함수
// new 생성자 함수
// 앞에 new를 붙이지 않으면 일반함수로 취급됨
function Book(책이름, 가격, 출판사) {
    this.name = 책이름;
    this.price = 가격;
    this.company = 출판사;
}

const book1 = new Book("책1", 15000, "없음");
const book2 = Book("책1", 15000, "없음");

console.log(book1); // Book {name: '책1', price: 15000, company: '없음'}
console.log(book2); // undefined