// 객체
const obj = {
    "name": "현수",
    "gender": "남자",
    sayHello() {
        console.log("Hello world");
    }
};

console.log(obj); // {name: '현수', gender: '남자', sayHello: ƒ}

// 프로퍼티 변경
obj.name = "이름 바꿈";
console.log(obj.name); // 이름 바꿈

// 프로퍼티 추가
obj["job"] = "FE";
obj.mbti = "infp";
console.log(obj); // {name: '이름 바꿈', gender: '남자', job: 'FE', mbti: 'infp', sayHello: ƒ}

// 프로퍼티 삭제
delete obj.job;
delete obj.mbti;
console.log(obj); // {name: '이름 바꿈', gender: '남자', sayHello: ƒ}

// 프로퍼티 값이 있는지 확인
console.log("job" in obj); // false
console.log("name" in obj); // true

