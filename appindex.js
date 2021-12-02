let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

/* Var/Let Carrousel */
let img__slider = document.getElementsByClassName('img__slider');
let etape = 0;
let nbr__img = img__slider.length;
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

/* Function Carrousel Début */
function enleverActiveImages() {
    for(let i = 0 ; i < nbr__img ; i++) {
        img__slider[i].classList.remove('active')
    }
}
suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})
precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr__img - 1;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
})
setInterval(function() {
    etape++;
    if(etape >= nbr__img) {
        etape = 0;
    }
    enleverActiveImages();
    img__slider[etape].classList.add('active');
}, 8000)
/* Function Carrousel Fin */

//--------------------------HEADER END-------------------//

const slider = document.querySelector(".items");
      const slides = document.querySelectorAll(".item");
      const button = document.querySelectorAll(".button");

      let current = 0;
      let prev = 6;
      let next = 1;

      for (let i = 0; i < button.length; i++) {
          button[i].addEventListener("click", () => i == 0 ?
    gotoPrev() : gotoNext());
      }

      const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

      const gotoNext = () => current < 6 ? gotoNum(current + 1) : gotoNum(0);

      const gotoNum = number => {
          current = number
          prev = current - 1;
          next = current + 1;

          for (let i = 0; i < slides.length; i++) {
              slides[i].classList.remove("active");
              slides[i].classList.remove("prev");
              slides[i].classList.remove("next");
          }

          if (next == 7) {
              next = 0;
          }

          if (prev == -1) {
              prev = 6;
          }

          slides[current].classList.add("active");
          slides[prev].classList.add("prev");
          slides[next].classList.add("next");
      }