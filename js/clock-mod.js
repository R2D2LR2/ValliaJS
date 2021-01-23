const clockContainer = document.querySelector(".js-clock"),
  clockHour = clockContainer.querySelector("span:first-child"),
  clockColumn = clockContainer.querySelector("span:nth-child(2)"),
  clockMinute = clockContainer.querySelector("span:nth-child(3)");
/* CSS 선택자를 이용한 검색 가능 */
const CLOCK_COLUMN = "js-clock__column";

function getTime() {
  const date = new Date();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();

  clockHour.innerText = `${hours < 10 ? `0${hours}` : hours}`;
  clockMinute.innerText = `${minute < 10 ? `0${minute}` : minute}`;
  clockColumn.classList.toggle(CLOCK_COLUMN);
}
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
