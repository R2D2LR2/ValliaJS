// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const container = document.querySelector(".container"),
  input = container.querySelector(".row:first-child input"),
  allBtn = document.querySelectorAll("button");

let checkOperator = false;
let checkNumber = true;
let checkEquals = true;
let result = "";

function operator(op) {
  if (checkOperator === true) {
    checkOperator = false;
    result += op;
    checkNumber = false;
  }
}

function reset() {
  input.value = 0;
  result = "";
  checkOperator = false;
  checkEquals = true;
}

function calc() {
  if (input.value === "0") {
    reset();
  } else if (checkOperator === checkEquals) {
    const final = eval(result);
    input.value = final;
    result = "";
    checkOperator = false;
    checkEquals = false;
  } else {
    reset();
  }
}

function paintNumber(num) {
  checkOperator = true;
  const current = input.value;
  if (checkEquals) {
    if (checkNumber) {
      input.value = current === "0" ? num : input.value + num;
    } else {
      input.value = num;
      checkNumber = true;
    }
    result += num;
  } else {
    checkEquals = true;
    input.value = num;
    result = num;
    console.log(result);
  }
}

function clickedBtn() {
  allBtn.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.op) {
        case "operator":
          const op = button.innerText;
          operator(op);
          break;
        case "cancle":
          reset();
          break;
        case "equals":
          calc();
          break;
        default:
          const number = button.innerText;
          paintNumber(number);
          break;
      }
    });
  });
}

function init() {
  clickedBtn();
}

init();
