const arr = [10, 20, 30];


console.log(`----push & pop----`);
// push
arr.push(20);
console.log(`push(20):`, arr); // [10, 20, 30, 20] 길이값을 반환
// pop
const popEl = arr.pop();
console.log(`pop():`, arr); // 마지막 요소 반환
console.log("popEl: ", popEl); // 20


console.log(`----unshift & shift----`);
// unshift
arr.unshift(5);
console.log("unshift(20):", arr); // [5, 10, 20, 30] 길이값을 반환
// shift
const shiftEl = arr.shift();
console.log("shift():", arr); // 첫번째 요소 반환
console.log(`shiftEl:`, shiftEl); // 5


console.log(`----splice----`);
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 6, 7);
console.log(`splice(1,0,6,7)`, arr2); // [1, 6, 7, 2, 3]

// 7,2 삭제
arr2.splice(2, 2);
console.log(`splice(2,2):`, arr2); // [1, 6, 3]

// 변경
arr2.splice(2, 1, 5, 8);
console.log(`splice(2,1,5,8)`, arr2); // [1, 6, 5, 8]


console.log(`----slice----`);
const fruits = ["사과", "배", "바나나", "망고"];
console.log(`slice(1,3)`, fruits.slice(1, 3)); // ['배', '바나나']
console.log(`slice(3)`, fruits.slice(3)); // ['망고']
const fruits2 = fruits.slice(); // 해당 배열을 복사


console.log(`----sort----`);
console.log(`sort:`, fruits.sort()); // ['망고', '바나나', '배', '사과'] 유니코드 순서로 정렬

const numbers = [1, 4, 2, 5, 3];
console.log(`sort:`, numbers.sort()); // [1, 2, 3, 4, 5]

const numbers2 = [5, 100, 27, 39];
console.log(numbers2.sort()); // [100, 27, 39, 5] 문자열로 인식하기 때문

// 숫자 오름차순
const sortedNumbers = numbers2.sort(function (a, b) {
  console.log(`a: ${a} b: ${b}`);
  const result = a - b;
  console.log(`result(a - b): ${result}`);
  console.log("-".repeat(30));
  return result;
});

console.log(sortedNumbers);


console.log(`----indexOf----`);
const arr3 = [1, 2, 3, 4, 2, 3, 7];
console.log("indexOf(4)", arr3.indexOf(4)); // 3
console.log("indexOf(2, 3)", arr3.indexOf(2, 3)); // 4
console.log("indexOf(4)", arr3.indexOf(10)); // -1


console.log(`----includes----`);
console.log(`includes(3)`, arr3.includes(3)); // true
console.log(`includes(10)`, arr3.includes(10)); // false


console.log(`----forEach----`);
const arr4 = ["사과", "바나나", "망고"];
const newArr = [];

arr4.forEach((el) => {
  console.log(el);
  newArr.push(`${el}🥝`);
});

console.log(newArr); // ['사과🥝', '바나나🥝', '망고🥝']


console.log(`----map----`);
const arr5 = ["사과", "배", "바나나", "망고", "오렌지"];

const mapArr = arr5.map((el, idx) => {
  return `${el} ${idx}개`;
});

console.log(mapArr); // ['사과 0개', '배 1개', '바나나 2개', '망고 3개', '오렌지 4개']


console.log(`----filter----`);
const filteredArr = arr5.filter((el) => el !== "사과");

console.log(filteredArr); // ['배', '바나나', '망고', '오렌지']


console.log(`----reduce----`);
const arr6 = [1,2,3,4,5];
const reduceArr = arr6.reduce((num, el) => {
    console.log(`num: ${num}, el: ${el}`);
    return num += el
}, 0);

console.log(reduceArr); // 15


console.log(`----join----`);
console.log(`join("-"): `,arr6.join("-")); // 1-2-3-4-5


console.log(`----concat----`);
const numArr = [3,2,1]
const arr7 = arr6.concat([numArr],1,2,[3]);
const copyArr = arr7.concat();
console.log(arr7)
console.log(`copyArr: `,copyArr);


console.log(`----for of----`);
const arr8 = [1,2,3,4,5,6];
for (const iterator of arr8) {
  console.log(iterator)
}