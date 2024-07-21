const numBtn = document.querySelectorAll("button");
const $p = document.querySelector("p");

let beforeNum = "";
let calculation = "";
let num = "";
// p에 출력할 숫자를 제어하기 위한 변수
let isNewCalculation = true;

const calculator = (num1, num2, calc) => {
  let result = 0;
  switch (calc) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = num1 / num2;
      break;
  }

  return result;
};

const calcFunc = (e) => {
  const target = e.target;
  const btnContent = target.textContent;
  const checkNum = Number(btnContent);

  if (!isNaN(checkNum)) {
    // 숫자 버튼 클릭
    if (isNewCalculation) {
      $p.textContent = btnContent;
      isNewCalculation = false;
    } else {
      $p.textContent += btnContent;
    }
    num += btnContent;
  } else {
    // 연산자 버튼 클릭
    if (btnContent === "AC") {
      beforeNum = "";
      calculation = "";
      num = "";
      $p.textContent = "";
      return;
    }

    if (btnContent !== "=") {
      calculation = btnContent;
      beforeNum = num;
      num = "";
      isNewCalculation = true;
    } else {
      $p.textContent = calculator(beforeNum, num, calculation);
      isNewCalculation = true;
    }
  }

  console.log("beforeNum:", beforeNum);
  console.log("calculation:", calculation);
};

numBtn.forEach((btn) => {
  btn.addEventListener("click", calcFunc);
});
