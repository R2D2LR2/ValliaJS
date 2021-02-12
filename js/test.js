const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

const testEvent = {
  testMid: function testMid() {
    console.log(console.error);
  },
  testTop: function () {
    console.log(console.time);
  },
};

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
