const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  removeGreeting = document.querySelector(".js-remove-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello! ${text}`;
  removeGreeting.classList.add(SHOWING_CN);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function btnClick() {
  const removeName = removeGreeting.value;
  if (removeName === "remove") {
    greeting.classList.remove(SHOWING_CN);
    removeGreeting.classList.remove(SHOWING_CN);
    askForName();
  } else {
    //   버튼이 눌리지 않았을 때
  }
}

function init() {
  loadName();
  removeGreeting.addEventListener("click", btnClick);
}

init();
