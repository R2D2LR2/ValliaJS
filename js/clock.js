const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(
    "h1:first-child"
  ); /* CSS 선택자를 이용한 검색 가능 */

function getTime() {
  const date = new Date();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
