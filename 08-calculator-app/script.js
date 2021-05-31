const body = document.querySelector('body');
const calcButtons = document.querySelectorAll('.calculator__keys .calculator__key');
const themeButtons = document.querySelectorAll('.calculator__toggle-switch button');


function themeSwitch(){
    body.className = "";
    body.classList.add(`theme-${event.originalTarget.dataset.theme}`);
}

for(let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', themeSwitch);
}