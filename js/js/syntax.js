// 전개구문 (...)
// array
const numbers = [1,2,3,4,5];
const numArr = [...numbers];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numArr); // [1, 2, 3, 4, 5]
numArr.pop();
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numArr); // [1, 2, 3, 4]
// 얕은 복사 가능


// object
const obj1 = {a: 1, b: 2};
const obj2 = {b: 3};

const obj = {...obj1, ...obj2};

console.log(obj); // {a: 1, b: 3}
// 키 값이 중복되면 나중에 온 값으로 덮어쓰기 됨



// 구조 분해 할당
// array
const numArr2 = [3,1,2];
const [a, b, c] = numArr2;

console.log(a); // 3
console.log(b); // 1
console.log(c); // 2

const numArr3 = [1,3,2,5,6];
const [d, , f] = numArr3;

console.log(d); // 1
console.log(f); // 2

// object
const foodObj = {food1: "치킨", food2: "떡볶이", food3: "냉면"};
let {food1, food2, food3} = foodObj;

console.log(food1); // 치킨
console.log(food2); // 떡볶이
console.log(food3); // 냉면

let {food1: newFood1, food2: newFood2, food3: newFood3} = foodObj;

console.log(newFood1); // 치킨
console.log(newFood2); // 떡볶이
console.log(newFood3); // 냉면

// funciton
// array
const numArr4 = [3,4,5,6];
function arrFunc([a,b,c]) {
    return [a,b,c];
}

console.log(arrFunc(numArr4)); // [3, 4, 5]

// object
const obj3 = {a:10, b:30, c: "hi"};

function func5(obj) {
    
    return obj;
}

const {a: objA, c:objC} = func5(obj3);

console.log(objA); // 10
console.log(objC); // hi

