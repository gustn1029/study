// 숫자형 메소드
console.log(`----parseInt----`);

// 문자열 데이터 -> 숫자형
console.log(typeof parseInt("36"));

// px 포함
console.log(parseInt("36px")); // 36
console.log(parseInt("12.5px")); // 12
console.log(parseInt("width:36px")); // NaN

console.log(`----parseFloat----`);
console.log(parseFloat("12.5px")); // 12.5

console.log(`----isInteger----`);
console.log(Number.isInteger("36")); // false
console.log(Number.isInteger(36)); // true
console.log(Number.isInteger(12.5)); // false

console.log(`----isNaN()----`);
console.log(isNaN(36)); // false
console.log(isNaN(undefined)); // true
console.log(isNaN(NaN)); // true
console.log(isNaN("36")); // false

console.log(`----Number.isNaN()----`);
// 형변환 안됨
console.log(Number.isNaN(36)); // false
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("36")); // false
console.log(Number.isNaN(NaN)); // true

console.log(`----toFixed----`);
const num = 3.221234123;
console.log(num.toFixed(3)); // 3.221
console.log(num.toFixed(10));
/* 3.2212341230(설정한 자릿수 보다 길이가 짧다면 없는 자리수에는 0이 붙음) */
console.log(typeof num.toFixed(10)); // string
console.log(num.toFixed()); // 3
// 결과 문자열

console.log(`----Math----`);
// 숫자 버림
console.log(`Math.floor: ${Math.floor(4.7)}`);
// 숫자 반올림
console.log(`Math.round: ${Math.round(4.7)}`);
console.log(`Math.round: ${Math.round(4.3)}`);
// 숫자 올림
console.log(`Math.ceil: ${Math.ceil(4.2)}`);

// 정수부를 가져옴
console.log(`Math.trunc: ${Math.trunc(4.2)}`);
console.log(`Math.trunc: ${Math.trunc(-4.2)}`);

// 제곱과 제곱근
console.log(`Math.pow: ${Math.pow(2,3)}`);
console.log(`Math.pow === 2 ** 3: ${Math.pow(2,3) === (2 ** 3)}`); // true
console.log(`Math.sqrt: ${Math.sqrt(16)}`);

// 절대값
console.log(`Math.abs: ${Math.abs(-5)}`);

// 랜덤숫자
console.log(`Math.random: ${Math.random()}`);

// 1 ~ 10 랜덤 정수 숫자
console.log(`1 ~ 10: ${Math.floor(Math.random() * 10 + 1)}`)

// min. max
console.log(`Math.max: ${Math.max(10,20,30,15)}`);
console.log(`Math.min: ${Math.min(10,20,30,5)}`);

console.log(`----BigInt----`);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
const bigNum = 12n;
console.log(typeof bigNum);

// bigint 연산
console.log(5n / 2n); // 2n