// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");

function changeBackgroundColor() {
  const changeWidth = window.outerWidth;
  if (changeWidth >= 1200) {
    body.style.backgroundColor = "rgb(238, 188, 18)";
  } else if (changeWidth >= 800) {
    body.style.backgroundColor = "rgb(144, 78, 172)";
  } else {
    body.style.backgroundColor = "rgb(46, 140, 213)";
  }
}
changeBackgroundColor();
window.addEventListener("resize", changeBackgroundColor);
