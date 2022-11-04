const lightBtn = document.querySelector("#light");
const darkBtn = document.querySelector("#dark");
const radioBtns = document.querySelectorAll(".toggle__wrapper input");
const bodyPart = document.querySelector("body");

const setDarkMode = () => {
  bodyPart.classList = "dark";
  localStorage.setItem("colorMode", "dark");//saving info in localstorage after refresh site
};

const setLightMode = () => {
  bodyPart.classList = "light";
  localStorage.setItem("colorMode", "light");//saving info in localstorage after refresh site
};

const colorModeFromLocalStorage = () => {
  return localStorage.getItem("colorMode"); //saving info in localstorage after refresh site
};

const colorModeFromPreferences = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"; // If preference is set or does not match anything (light is default)
};

const loadAndUpdateColor = () => {
  // local storage has precendence over the prefers-color-scheme
  const color = colorModeFromLocalStorage() || colorModeFromPreferences();
  color == "dark" ? darkBtn.click() : lightBtn.click();
};

radioBtns.forEach((button) => {
  button.addEventListener("click", () => {
    darkBtn.checked ? setDarkMode() : setLightMode();
  });
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    event.matches ? darkBtn.click() : lightBtn.click();
  });

// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();
