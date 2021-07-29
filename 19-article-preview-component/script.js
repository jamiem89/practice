const footer = document.querySelector(`.article__footer`);
const modal = document.querySelector(`.article__footer-modal`);

function toggleModal() {
    if(event.target.nodeName == "BUTTON") {
        if(modal.dataset.active == 'active') {
            modal.dataset.active = 'inactive'
        } else {
            modal.dataset.active = 'active'
        }
    }
}

footer.addEventListener('click', toggleModal);