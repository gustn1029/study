// 조건문

// if(조건) {실행 코드}
let score = 50;
if(score >= 50) {
    console.log("50점 이상입니다.")
}

// if else
let score2 = 61;
if(score2 > 60) {
    console.log("61점 이상")
} else {
    console.log("60점 이하")
}

// if else if else
let score3 = 70;

if(score3 >= 90) {
    console.log("수")
} else if(score3 >= 80 && score3 < 90) {
    console.log("우")
} else if(score3 >= 70 && score3 < 80) {
    console.log("미")
} else if(score3 >= 60 && score3 < 70) {
    console.log("양")
} else {
    console.log("가")
}

// 삼항 연산자
// 조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
let score4 = 73;
const result = (score4 > 73) ? "74점 이상" : "73점 이하";

console.log(result);

// 삼항연산자 중첩
let price = 3005;

const message = (price > 6000)  ? "비싸요" : (price > 3000 && price <= 6000) ? "적당해요" : "저렴해요";

console.log(message); // 적당해요