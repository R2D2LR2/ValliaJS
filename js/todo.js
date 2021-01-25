const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
/* 다시 복습 필요! */
function paintToDo(text) {
  /* li 를 만들어 사용자가 입력한 내용을 버튼과 함께 html 문서에 삽입 */
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span");
  delBtn.innerText = "❌";
  span.innerText = text;
  toDoList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(span);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
