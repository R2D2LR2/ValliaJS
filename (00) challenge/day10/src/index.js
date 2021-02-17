// <⚠️ DONT DELETE THIS ⚠️>
/* import "./styles.css"; */
// <⚠️ /DONT DELETE THIS ⚠️>
const form = document.querySelector(".js-form"),
  range = document.querySelector("input[type=range]"),
  playNumber = document.querySelector("input[type=number]"),
  rangeMaxValue = document.querySelector(".js-rangeMaxValue"),
  resultText = document.querySelector("#js-result "),
  resultChooseNum = document.querySelector(".js-chooseNum"),
  machineNum = document.querySelector(".js-machineNum"),
  lostText = document.querySelector("#lost"),
  wonText = document.querySelector("#won");

const SHOWING_CLASS = "showing",
  HIDING_CLASS = "hiding";

const showingAndHiding = {
  won: function () {
    resultText.classList.remove(SHOWING_CLASS);
    resultText.classList.add(SHOWING_CLASS);
    lostText.classList.remove(SHOWING_CLASS);
    lostText.classList.add(HIDING_CLASS);
    wonText.classList.remove(HIDING_CLASS);
    wonText.classList.add(SHOWING_CLASS);
  },
  lost: function () {
    resultText.classList.remove(SHOWING_CLASS);
    resultText.classList.add(SHOWING_CLASS);
    lostText.classList.remove(HIDING_CLASS);
    lostText.classList.add(SHOWING_CLASS);
    wonText.classList.remove(SHOWING_CLASS);
    wonText.classList.add(HIDING_CLASS);
  },
};

let clickedCount = 1;

function rangeValue() {
  const selectRangeMaxValue = range.value;
  rangeMaxValue.innerText = selectRangeMaxValue;
  playNumber.max = selectRangeMaxValue;
}

function paintText() {
  const chooseNum = parseInt(playNumber.value);
  const maxMachineChooseNum = range.value;
  const randomNum = Math.ceil(Math.random() * maxMachineChooseNum);
  resultChooseNum.innerText = chooseNum;
  machineNum.innerText = randomNum;

  if (chooseNum === randomNum) {
    showingAndHiding.won();
    alert(`You won! You tried ${clickedCount} times`);
    clickedCount = 1;
    /* You Won! */
  } else {
    showingAndHiding.lost();
    clickedCount += 1;
    /* You lost */
  }
  // console.log( `선택된 번호: ${chooseNum}, 최대번호: ${maxMachineChooseNum}, 랜덤 번호: ${randomNum}`);
}

function submitPlayBtn(event) {
  event.preventDefault();
  paintText();
}

function init() {
  range.addEventListener("mousemove", rangeValue);
  form.addEventListener("submit", submitPlayBtn);
}

init();
