// Mobile menu stuff

const menuTrigger = document.querySelector(`.menu-trigger`);
const mainMenu = document.querySelector(`.header__menu`);
const menuItemTriggers = document.querySelectorAll('.header__menu > ul > li > a');

function menuToggle() {
    let topLevelItems = document.querySelectorAll(`.header__menu > ul > li`);
    event.preventDefault();
    if(mainMenu.classList.contains('active')) {
        menuTrigger.classList.remove('active');
        mainMenu.classList.remove('active');
        for(let i = 0; i < topLevelItems.length; i++) {
            topLevelItems[i].classList.remove('active');
        }
    } else {
        menuTrigger.classList.add('active');
        mainMenu.classList.add('active');
    }
}

function menuItemToggle() {

    // Add/remove active
    if(this.parentElement.classList.contains('active')) {
        this.parentElement.classList.remove('active');
    } else {
        this.parentElement.classList.add('active');
    }
}

// Add listener to each top level menu item
for (var i = 0; i < menuItemTriggers.length; i++) {
    menuItemTriggers[i].addEventListener('click', menuItemToggle);
}

menuTrigger.addEventListener('click', menuToggle);