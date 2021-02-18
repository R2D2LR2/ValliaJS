// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const container = document.querySelector(".container"),
  input = container.querySelector("input[type=text]"),
  btn = document.querySelectorAll("button");

function clickedBtn(event) {
  //   console.log(event.toElement.innerText);
  console.log(event.target.value);
  input.value = event.target.value;
}

function init() {
  container.addEventListener("click", clickedBtn);
}

init();
