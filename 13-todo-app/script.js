const body = document.querySelector(`body`)
const themeSelect = document.querySelector(`.scheme-select`);
const itemInput = document.querySelector(`.add-item input`);
const listContainer = document.querySelector(`.list`);
const listRemaining = document.querySelector(`#listRemaining`);
const listFilters = document.querySelector(`.list-footer__filters`);
const clearFilter = document.querySelector(`.list-footer__clear`);
const remainingText = document.querySelector(`#listRemaining`);

// Change the theme
function changeTheme() {
    if(this.classList.contains(`scheme-select--dark`)) {
        body.classList.remove(`scheme-light`);
        body.classList.add(`scheme-dark`);
        this.classList.remove(`scheme-select--dark`);
        this.classList.add(`scheme-select--light`);
    } else {
        body.classList.remove(`scheme-dark`);
        body.classList.add(`scheme-light`);
        this.classList.remove(`scheme-select--light`);
        this.classList.add(`scheme-select--dark`);
    }
}

function watchInput(e){
    if(e.code == 'Enter' && itemInput.value.length > 0) {
        addItem(itemInput.value);
        itemInput.value = '';
    }
}

function addItem(str) {
    let listItem = document.createElement('li');
    let itemCheck = document.createElement('span');
    let itemRemove = document.createElement('span');
    itemCheck.classList.add('list-item__check');
    itemRemove.classList.add('list-item__remove');
    listItem.textContent = str;
    listItem.classList.add('list__item');
    listItem.dataset.completed = 'false';
    listItem.appendChild(itemRemove);
    listItem.appendChild(itemCheck);
    listContainer.appendChild(listItem);

    trackItems();
}

function listClickHandle() {
    if(event.target.classList.contains(`list-item__check`)) {
        checkItem(event.target);
    } else if(event.target.classList.contains(`list-item__remove`)) {
        removeItem(event.target);
    }
}

function checkItem(listItem) {
    itemParent = listItem.parentNode;
    if(itemParent.classList.contains(`completed`)) {
        itemParent.classList.remove(`completed`)
        itemParent.dataset.completed = 'false'
    } else {
        itemParent.classList.add(`completed`)
        itemParent.dataset.completed = 'true';
    }
    trackItems();
}

function removeItem(listItem) {
    listItem.parentNode.classList.add(`delete-anim`);
    setTimeout(() => {
        listItem.parentNode.remove();
    },400);
    trackItems();
}

function listFilter(e) {
    filter = e.target.dataset.filter;
    let allButtons = e.target.parentNode.parentNode.children;
    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
    }
    e.target.parentNode.classList.add(`active`);

    let listItems = document.querySelectorAll(`.list__item`);
    if(filter == 'all') {
        for(let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = 'block';
        }
    } else if(filter == 'active') {
        for(let i = 0; i < listItems.length; i++) {
            if(listItems[i].dataset.completed == 'true') {
                listItems[i].style.display = 'none';
            } else {
                listItems[i].style.display = 'block';
            }
        }
    } else if(filter == 'completed') {
        for(let i = 0; i < listItems.length; i++) {
            if(listItems[i].dataset.completed == 'false') {
                listItems[i].style.display = 'none';
            } else {
                listItems[i].style.display = 'block';
            }
        }
    }
}

function clearComplete() {
    let listItems = document.querySelectorAll(`.list__item`);
    for(let i = 0; i < listItems.length; i++) {
        if(listItems[i].dataset.completed == 'true') {
            listItems[i].remove();
        }
    }
}

function trackItems() {
    count = document.querySelectorAll(`[data-completed="false"]`).length;
    remainingText.textContent = count;
}

themeSelect.addEventListener('click', changeTheme)
itemInput.addEventListener('keydown', watchInput);
listContainer.addEventListener('click', listClickHandle);
listFilters.addEventListener('click', listFilter);
clearFilter.addEventListener('click', clearComplete);
trackItems();
