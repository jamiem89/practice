const accTriggers = document.querySelectorAll('.accordion-title');

function accToggle() {
    let group = event.target.parentElement;
    let panel = group.querySelector('p');
    console.log(panel);
    // let toExpand group.childElem
    if(group.classList.contains('active')) {
        group.classList.remove('active');
    } else {
        group.classList.add('active');
    }

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = (panel.scrollHeight + 20) + "px";
    }

}


for (var i = 0; i < accTriggers.length; i++) {
    accTriggers[i].addEventListener('click', accToggle);
}