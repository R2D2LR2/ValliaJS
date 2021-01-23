const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(
    "h1:first-child"
  ); /* CSS 선택자를 이용한 검색 가능 */

function getTime() {
  const date = new Date();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();

  clockTitle.innerText = `${hours}:${minute}:${second}`;
}

function init() {
  getTime();
}

init();
