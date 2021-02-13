// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const COUNTRY_LIST = ["", "KR", "GR", "TR", "FN"];
const selectedCountry = document.querySelector(".js-country");

const firstOption = selectedCountry.querySelector("option:nth-child(1)"),
  secondOption = selectedCountry.querySelector("option:nth-child(2)"),
  thirdOption = selectedCountry.querySelector("option:nth-child(3)"),
  fourthOption = selectedCountry.querySelector("option:nth-child(4)"),
  fifthOption = selectedCountry.querySelector("option:nth-child(5)");

firstOption.value = COUNTRY_LIST[0];
secondOption.value = COUNTRY_LIST[1];
thirdOption.value = COUNTRY_LIST[2];
fourthOption.value = COUNTRY_LIST[3];
fifthOption.value = COUNTRY_LIST[4];

const USER_LS_KEY = "country";

function saveCountry(event) {
  const valueCountry = event.target.value;
  localStorage.setItem(USER_LS_KEY, valueCountry);
}

function loadCountry() {
  const country = localStorage.getItem(USER_LS_KEY);
  selectedCountry.value = country;
}

function init() {
  selectedCountry.addEventListener("change", saveCountry);
  loadCountry();
}

init();
