// Ripple button

const rippleButton = document.querySelector('.btn-ripple');

function funcRippleButton(){
    button = event.currentTarget;
    const circle = document.createElement("span");

    circle.style.left = `${event.clientX - (button.offsetLeft + 50)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + 50)}px`;
    circle.classList.add("ripple");
    button.appendChild(circle);
}

rippleButton.addEventListener('click', funcRippleButton);

// Progress button

const progressButton = document.querySelector('.btn-progress');

function funcProgressButton() {
    progressButton.classList.add('active');
    progressButton.addEventListener('animationend', () => {
        progressButton.classList.remove('active');
      });
}

progressButton.addEventListener('click', funcProgressButton);