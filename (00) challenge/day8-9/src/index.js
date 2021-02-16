// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pendingList"),
  finishedList = document.querySelector(".js-finishedList");

const TODOS_LS = "PENDING";
const CHECK_LS = "FINISHED";

let toDos = [];
let chkToDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  savePendingToDos();
}

function savePendingToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveFinishedToDos() {
  localStorage.setItem(CHECK_LS, JSON.stringify(chkToDos));
}

function finishedToDo(text) {
  /* finished 영역으로 데이터 옮기기 */
}

function movedToDo(event) {
  const liId = event.target.parentNode.id;
  const spanText = event.target.parentNode.firstChild.innerText;
  // const li = btn.parentNode;

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");
  const span = document.createElement("span");
  // const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  chkBtn.innerText = "❎";
  delBtn.addEventListener("click", deleteToDo);
  chkBtn.addEventListener("click", movedToDo);
  span.innerText = spanText;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(chkBtn);
  li.id = liId;
  finishedList.appendChild(li);
  const toDoObj = {
    text: spanText,
    id: liId,
  };
  chkToDos.push(toDoObj);
  saveFinishedToDos();
}

function pendingToDo(text) {
  //   console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  chkBtn.innerText = "✅";
  delBtn.addEventListener("click", deleteToDo);
  chkBtn.addEventListener("click", movedToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(chkBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  savePendingToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  pendingToDo(currentValue);
  toDoInput.value = "";
}

function loadPendingToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      pendingToDo(toDo.text);
    });
  }
}

function loadFinishedToDos() {
  const loadedFinishedToDos = localStorage.getItem(CHECK_LS);
  if (loadedFinishedToDos !== null) {
    const parsedToDos = JSON.parse(loadedFinishedToDos);
    console.log(parsedToDos);
    // parsedToDos.forEach(function (toDo) {
    //   pendingToDo(toDo.text);
    // });
  }
}

function init() {
  loadPendingToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
