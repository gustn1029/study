// 객체 메소드

// 객체 프로퍼티 키, 밸류, 키 밸류 쌍
const obj = {
    "name": "현수",
    "gender": "남자",
    sayHello() {
        console.log("Hello world");
    }
};

console.log(Object.keys(obj));
// key 배열 반환
console.log(Object.values(obj));
// value 배열 반환
console.log(Object.entries(obj));
// 프로퍼티 키 밸류 쌍을 배열로 변환

// hasOwnProperty
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("job")); // false

// for in
for (const key in obj) {
    console.log(key)
    // 프로퍼티의 키 값을 순회
}