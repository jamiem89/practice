const billTotalInput = document.querySelector(`#billTotal`);
const tipAmountButtons = document.querySelector(`.calc__field-btns`);
const tipCustomButton = document.querySelector(`#customTip`);
const peopleInput = document.querySelector(`#peopleTotal`);
const tipPerPersonOutput = document.querySelector(`#tipPerPerson`);
const totalPersonOutput = document.querySelector(`#totalPerPerson`);
const resetButton = document.querySelector(`#resetButton`);

let billSet = false;
let tipSet = false;
let peopleSet = false;

let billTotal = 0;
let tipPercent = 0;
let splitBetween = 0;


function updateBillTotal() {
    billSet = true;
    billTotal = billTotalInput.value;
    console.log(`bill total: ${billTotal}`);
    if(billSet && tipSet && peopleSet) {
        updateTotals();
    }
}

function handleTipAmount() {
    tipSet = true;
    clicked = event.target;
    siblings = clicked.parentNode.parentNode.children;
    for(let i = 1; i < siblings.length; i++) {
        siblings[i].children[1].dataset.active = 'false';
    }
    clicked.dataset.active = 'active';
    tipPercent = clicked.value;
    console.log(`tip percent: ${tipPercent}`);
    if(billSet && tipSet && peopleSet) {
        updateTotals();
    }
}

function updatePeople() {
    peopleSet = true
    splitBetween = peopleTotal.value;
    console.log(`Number of people: ${splitBetween}`);
    if(billSet && tipSet && peopleSet) {
        updateTotals();
    }
}

function updateTotals() {

    billTotal = parseInt(billTotal);
    tipPercent = parseInt(tipPercent);
    splitBetween = parseInt(splitBetween);

    totalPrice = billTotal + (billTotal / tipPercent);
    console.log(`Bill total: ${billTotal} + ${billTotal / tipPercent}`);
    tipPerPerson = (billTotal / tipPercent) / splitBetween;
    tipPerPerson = Math.round(tipPerPerson * 100) / 100;
    totalPerPerson = totalPrice / splitBetween;
    totalPerPerson = Math.round(totalPerPerson * 100) / 100;


    tipPerPersonOutput.textContent = `$${tipPerPerson}`
    totalPersonOutput.textContent = `$${totalPerPerson}`

    resetButton.dataset.active = "active";
}

function resetApp() {
    billTotal = 0;
    tipPercent = 0;
    splitBetween = 0;
    billSet = false;
    tipSet = false;
    peopleSet = false;
    tipPerPersonOutput.textContent = `$0.00`;
    totalPersonOutput.textContent = `$0.00`;
    resetButton.dataset.active = "";
    billTotalInput.value = "";
    peopleInput.value = "";
    for(let i = 1; i < siblings.length; i++) {
        siblings[i].children[1].dataset.active = 'false';
    }

}

billTotalInput.addEventListener('change', updateBillTotal);
billTotalInput.addEventListener('keyup', updateBillTotal);
tipAmountButtons.addEventListener('click', handleTipAmount);
customTip.addEventListener('change', handleTipAmount);
customTip.addEventListener('keyup', handleTipAmount);
peopleInput.addEventListener('keyup', updatePeople);
peopleInput.addEventListener('change', updatePeople);
resetButton.addEventListener('click', resetApp);