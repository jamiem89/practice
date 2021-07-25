const menuTrigger = document.querySelector(`.site-header__trigger`);

function toggleMenu() {
    if(this.parentNode.dataset.active == 'true') {
        this.parentNode.dataset.active = 'false';
    } else {
        this.parentNode.dataset.active = 'true';
    }
}

menuTrigger.addEventListener('click', toggleMenu);