const myBtn = document.querySelector("button");
const myP = document.querySelector("p");
const myInput = document.querySelector("input");

myBtn.addEventListener('click', function(){
    const val = myInput.value;

    if(val < 2) {
        return alert("2글자 이상 입력해야 됩니다.");
    }
	myP.textContent = val;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener("input", () => {
  const val = myInput.value;
  
  myP.textContent = val;
});


// style
const target = document.querySelector("p");
const txtColor = target.style.color; // 현재 스타일 정보를 가져옵니다.
target.style.color = "red"; // 현재 스타일 정보를 변경합니다.
target.style.fontWeight = "bold"; // 현재 스타일 정보에 font-weight 속성이 없다면 추가합니다.


// attribute
const $img = document.querySelector("img");

$img.setAttribute("src", "https://cdn.pixabay.com/photo/2024/03/08/09/47/ai-generated-8620359_1280.png");
$img.setAttribute("alt", "고양이");
console.log($img.getAttribute("data-age")); // 2
console.log($img.dataset); // {age: '2', name: 'cat'}


// insertAdjacentHTML
const sayHi = document.querySelector(".sayHi");
sayHi.insertAdjacentHTML('beforebegin', '<span>안녕하세요 </span>');
sayHi.insertAdjacentHTML('afterbegin', '<span>모두들 </span>');
sayHi.insertAdjacentHTML('beforeend', '<span>좋은 시간 </span>');
sayHi.insertAdjacentHTML('afterend', '<span>보내세요.</span>');


// 노드 탐색
const cont = document.querySelector(".cont");
console.log(cont.firstElementChild); // <h1>안녕하세요 저는 이런 사람입니다.</h1>
console.log(cont.lastElementChild); // <strong>감사합니다!</strong>
console.log(cont.nextElementSibling); // <script></script>
console.log(cont.previousSibling); // #text
console.log(cont.children); // [h1, p, strong]
console.log(cont.childNodes); // [text, h1, text, p, text, strong, text]
console.log(cont.parentElement); // <body></body>
