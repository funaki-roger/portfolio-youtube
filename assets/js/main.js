/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-sidebar')
  })
}


/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-sidebar')
  })
}


/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove('skills__active');
    });

    target.classList.add('skills__active');

    tabs.forEach((tab) => {
      tab.classList.remove('skills__active');
    });

    tab.classList.add('skills__active');
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach((link) => link.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((link) => link.addEventListener('click', activeWork));

/*===== Work Popup =====*/
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(event.target.parentElement);
  }
});

document
  .querySelector('.portfolio__popup-close')
  .addEventListener('click', togglePortfolioPopup);

function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp__thumbnail img').src =
    portfolioItem.querySelector('.work__img').src;

  document.querySelector('.portfolio__popup-subtitle span').innerHTML =
    portfolioItem.querySelector('.work__title').innerHTML;

  document.querySelector('.portfolio__popup-body').innerHTML =
    portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.toggle('active-modal');
};

modalBtns.forEach((modelBtn, index) => {
  modelBtn.addEventListener('click', () => modal(index));
});

modalCloses.forEach((modalClose, index) => {
  modalClose.addEventListener('click', () => modal(index));
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper('.testimonials__container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section");

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Ajuste de offset
        let sectionId = current.getAttribute("id");

        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (link) link.classList.add('active-link');
        } else {
            if (link) link.classList.remove('active-link');
        }
    });
}

window.addEventListener("scroll", navHighlighter);


/*=============== SHOW SCROLL UP ===============*/


