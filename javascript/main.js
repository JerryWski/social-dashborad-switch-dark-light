const lightBtn = document.querySelector('#light');
const darkBtn = document.querySelector('#dark');
const radioBtns = document.querySelectorAll(".toggle__wrapper input");


radioBtns.forEach(button => {
    button.addEventListener('click', event => {
        darkBtn.checked ? setDarkMode() : setLightMode();
    })
    
});
