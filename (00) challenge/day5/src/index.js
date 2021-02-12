// import "./styles.css";

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const presentDay = Date.now();
  const remainDay = xmasDay.getTime() - presentDay; /* milliseconds */
  const setDay = new Date(remainDay);

  /* setDate 밀리세컨드로 일수 보정계산 86,400,000밀리초 = 1일 */
  const setDate = Math.floor(remainDay / 86400000),
    setHours = setDay.getHours() - 9 /* 시간 보정 */,
    setMinutes = setDay.getMinutes(),
    setSeconds = setDay.getSeconds();

  clockTitle.innerText = `${setDate < 10 ? `0${setDate}` : setDate}d ${
    setHours < 10 ? `0${setHours}` : setHours
  }h ${setMinutes < 10 ? `0${setMinutes}` : setMinutes}m ${
    setSeconds < 10 ? `0${setSeconds}` : setSeconds
  }s`;
}

const clockTitle = document.querySelector(".js-count");

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

//   const xmasDate = xmasDay.getDate(),
//     xmasHours = xmasDay.getHours(),
//     xmasMinutes = xmasDay.getMinutes(),
//     xmasSeconds = xmasDay.getSeconds();
//   const presentDate = presentDay.getDate(),
//     presentHours = presentDay.getHours(),
//     presentMinutes = presentDay.getMinutes(),
//     presentSeconds = presentDay.getSeconds();

//   clockTitle.innerText = `${setMonths < 10 ? `0${setMonths}` : setMonths}mon ${
//     setDate < 10 ? `0${setDate}` : setDate
//   }d ${setHours < 10 ? `0${setHours}` : setHours}hour ${
//     setMinutes < 10 ? `0${setMinutes}` : setMinutes
//   }min ${setSeconds < 10 ? `0${setSeconds}` : setSeconds}sec`;

// clockTitle.innerText = `${
//     setDate < 10 ? `0${setDate}` : setDate + setMonths * 30
//   }d ${setHours < 10 ? `0${setHours}` : setHours}hour ${
//     setMinutes < 10 ? `0${setMinutes}` : setMinutes
//   }min ${setSeconds < 10 ? `0${setSeconds}` : setSeconds}sec`;
// }

// const setMonths = setDay.getMonth(),
// setDate = setDay.getDate() - 1 /* 날짜 보정 1970-1-1 0시 기준이므로 */,
// setHours = setDay.getHours() - 9 /* 시간 보정 */,
// setMinutes = setDay.getMinutes(),
// setSeconds = setDay.getSeconds();
