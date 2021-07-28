const menuTrigger = document.querySelector(`#menuTrigger`)
const menuItems = document.querySelectorAll(`.menu__items li`);
const animDelay = 300;

console.log(animDelay);

function toggleMenu() {
    let parent = this.parentNode;
    if(parent.dataset.active != 'active') {
        parent.dataset.active = 'active';
    } else {
        parent.dataset.active = 'inactive';
    }
}

function setAnimDelay() {
    for(let i = 0; i < menuItems.length; i++) {
        console.log(menuItems[i]);
        menuItems[i].style.animationDelay = `${(animDelay / 2) * (i + 1)}ms`;
        console.log(animDelay * (i + 1));
    }
}



menuTrigger.addEventListener('click', toggleMenu);
menuTrigger.addEventListener('click', setAnimDelay);