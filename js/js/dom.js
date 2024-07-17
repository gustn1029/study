console.log(document.body.childNodes); // [text, h1, text, ul, text, comment, text, script, text]

const li = document.getElementById("first-item");
const liAll = document.querySelectorAll("li");
console.log(li); // <li id="first-item">DOM 탐색해보기</li>
console.log(liAll); // [li#first-item, li, li]

const sayHello = () => {
  console.log("Hello world");
  btn.classList.toggle("click-hello");
  console.log(btn); // <button class="hello-btn click-hello">Hello!</button>
};

const btn = document.querySelector(".hello-btn");
btn.addEventListener("click", sayHello);

// 요소 제어
const div = document.createElement("div");
div.textContent = "oh...";
document.body.appendChild(div); // <div>oh...</div>

// 구구단
const $button = document.querySelector("button");
const $ul = document.querySelector("ul");

$button.addEventListener("click", () => {
  const liArr = [];
  for (let i = 1; i <= 9; i++) {
    liArr.push(`<li>2 * ${i} = ${2 * i}</li>`);
  }
  $ul.insertAdjacentHTML("beforeend", liArr.join(""));
});
