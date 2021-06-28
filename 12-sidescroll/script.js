const container = document.querySelector(`.container`);

// Options
settings = {
    number: 80,
}

function createBars(num) {
    for(let i = 0; i < num; i++) {
        block = document.createElement('div')
        block.classList.add('block');
        block.style.opacity = (i / num);
        container.appendChild(block);
    }
    console.log(`blocks created`);
}

createBars(settings.number);

const scrollElements = document.querySelectorAll(`.block`);

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().left;

    return (
      elementTop <=
      (window.innerWidth || document.documentElement.clientWidth) / dividend
    );
  };

  function displayScrollElement(element){
    element.classList.add("reveal");
  };


  function handleScrollAnimation() {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1)) {
        displayScrollElement(el);
      }
    })
  }

  window.addEventListener("wheel", () => {
      handleScrollAnimation();
  });