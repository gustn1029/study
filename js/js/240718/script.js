// const btnFirst = document.querySelector('.btn-first');
// btnFirst.addEventListener('click', (event) => {
//     console.log(event.target.parentNode);
// });

// 이벤트 버블링, 캡쳐링 확인하기
const parent = document.querySelector(".parent");
const btnFirst = document.querySelector(".btn-first");
btnFirst.addEventListener(
  "click",
  (event) => {
    console.log("btn capture!", event.target);
  },
  true
);

window.addEventListener(
  "click",
  (event) => {
    console.log("window capture!", event.target);
  },
  true
); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.

document.addEventListener(
  "click",
  (event) => {
    console.log("document capture!", event.target);
  },
  true
);

parent.addEventListener(
  "click",
  (event) => {
    console.log("parent capture!", event.target);
  },
  true
);

btnFirst.addEventListener("click", (event) => {
  console.log("btn bubble!", event.target);
});

parent.addEventListener("click", (event) => {
  console.log("window bubble!", event.target);
});

document.addEventListener("click", (event) => {
  console.log("document bubble!", event.target);
});

window.addEventListener("click", (event) => {
  console.log("parent bubble!", event.target);
});

// target, currentTarget
/*
    target: 이벤트가 발생한 요소
    currentTarget: 이벤트를 등록한 요소
*/
window.addEventListener("click", (e) => {
  console.log(e.target, "target"); // <button class="btn-first" type="button">버튼1</button>
  console.log(e.currentTarget, "currentTarget"); // Window
});


// 이벤트 위임
parent.addEventListener('click', (e) => {
    console.log(e.target.nodeName)
    if(e.target.nodeName === "BUTTON") {
        e.target.textContent = "버튼4"
    }
})

console.clear();
// 이벤트에서 this
parent.addEventListener('click', function(e) {
    console.log(this, 'function => this');
    console.log(e.currentTarget, 'function => currentTarget');
    console.log(e.target, 'function => target');
})

parent.addEventListener('click', (e)=> {
    console.log(this, 'arrow => this');
    console.log(e.currentTarget, 'arrow => currentTarget');
    console.log(e.target, 'arrow => target');
})