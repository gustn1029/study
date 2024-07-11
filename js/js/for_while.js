// switch

const weniv_friends = ["licat", "binky", "gary", "soulgom", "mura"];
const doc = document.documentElement;

let text = "<ul>";
for (let i = 0; i < weniv_friends.length; i++) {
  text += `<li>${weniv_friends[i]}</li>`;
}
text += "</ul>";

doc.innerHTML = text;
console.log(text);

// const listTagArr = ["<ul>"];

// weniv_friends.map((el) => {
//     return listTagArr.push(`<li>${el}</li>`);
// })

// listTagArr.push("</>");

// doc.innerHTML = listTagArr.join("");
// console.log(listTagArr.join(""));
let sum = 0;
for (let i = 1; i <= 100; i++) {
  i % 2 === 0 && (sum += i);
}

console.log(sum);

const score = [84, 92, 39, 55, 71];

let total = 0;
score.forEach(function (el) {
  total += el;
});

console.log(`average : ${total / score.length}`);

// 구구단
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}단 : ${i} * ${j} = ${i * j}`);
  }
}

let iArr = [];
for (let i = 0; i <= 3; i++) {
  let jArr = [];
  for (let j = 0; j <= 2; j++) {
    jArr.push(j);
  }
  iArr.push(jArr);
}

console.log(iArr);

// while
let num = 0;
while (num <= 10) {
  console.log(num);
  num++;
}

// 이중 while
let i = 2;
let j;
while (i <= 9) {
  j = 1;
  console.log(`${"-".repeat(5)} ${i}단 ${"-".repeat(5)}`);
  while (j <= 9) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// do while
// 최소 한번의 실행을 보장함
let input;
do {
    input = window.prompt("숫자를 입력하세요.")
} while(isNaN(Number(input)));
console.log(`입력한 숫자는 ${input}입니다.`);

// break & continue
let point = 5;
let num2 = 0;

// break
for (let i = 0; ; i++) {
  if (i > 7) console.log(`${i}살은 초등학생`);
  if (i >= 13) break;
}

while (num2 < 11) {
  if (num2 === point) break;
  console.log(num2);
  num2++;
}

// continue
for (let i = 0; i < 10; i++) {
  if (i < 7) continue;
  console.log(`${i}번째 출력`);
}

num2 = 0;
while (num2 < 11) {
  num2++;
  if (num2 === point) continue;
  console.log(num2);
}

console.clear();
// label
// label break
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}
/*
0 0
0 1
0 2
1 0
1 1
*/

// label continue
outer2: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      continue outer2;
    }
    console.log(i, j);
  }
}
/*
0 0
0 1
0 2
1 0
1 1
2 0
 */
