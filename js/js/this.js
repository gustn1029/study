// this
// this를 호출한 객체를 가리킴
function func1() {
  console.log(this);
}

console.log(func1()); // Window

// object
let obj = {
  val: 100,
  func2() {
    console.log(this);
  },
};

console.log(obj.func2()); // {val: 100, func2: ƒ}

const person = {
  name: "현수",
  func() {
    console.log(`I'm ${this.name}`);
  },
};

console.log(person.func()); // I'm 현수

// call()
// 인자로 입력한 객체로 this 의 기준이 변경 되어 호출
let peter = {
  name: "peter Parker",
  sayName() {
    console.log(this.name);
  },
};

let bruce = {
  name: "Bruce Wayne",
};

const callName = peter.sayName.call(bruce);

console.log(callName); // Bruce Wayne

// apply()
peter.sayName = function (is, is2) {
  console.log(`${this.name} is ${is} or ${is2}`);
};

const applyName = peter.sayName.apply(bruce, ["batman", "richman"]);

console.log(applyName);

// bind()
function sayName() {
  console.log(this.name);
}

bruce = {
  name: "bruce",
  sayName,
};
peter.sayName = sayName.bind(bruce);

console.log(peter.sayName()); // bruce
console.log(bruce.sayName()); // bruce

const bindObj = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c();
    }
    b();
  },
};
bindObj.a();
/*
    {name: 'hojun', age: 25, a: ƒ}
    hojun

    Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    ''

    Window {window: Window, self: Window, document: document, name: '', location: Location, …}
*/

const obj1 = {
  func: () => {
    console.log(this);
  },
};

obj1.func(); // window

[1, 2, 3].forEach(
  function () {
    console.log(this);
  },
  [10, 20, 30]
);

const obj2 = {
  num: 1,
  func() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

console.log(obj2.func()); // window
