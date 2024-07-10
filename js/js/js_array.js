let arr1 = [1,2,3];
let arr2 = arr1;

arr2[0] = 10;
console.log(`arr1: ${arr1}`); // [10,2,3]
console.log(`arr2: ${arr2}`); // [10,2,3]

const arr = []; // 빈배열

// Array 생성자 함수
const arr3 = new Array(10, 20, 30);
console.log(arr3);

// 생성자 함수 주의사항
const arr4 = new Array(5); // 인자가 하나인데 숫자라면 배열의 길이로 설정

console.log(arr4);

// 특징
console.log(`----순서----`);
const arr5 = [10,20,30,40,50];
console.log(arr5[0]); // 10
console.log(arr5[4]); // 50
console.log(arr5[10]); // undefined
console.log(arr5[-1]); // undefined

// 음수 인덱스
console.log(arr5.at(-2)) // 40

// 배열의 요소
const arr6 = [10, 20, "hello"]; // 1차원 배열

const arr7 = [
    [10,20],
    [30, 40]
]; // 2차원 배열(행렬)

console.log(arr7[0][1]) // 20