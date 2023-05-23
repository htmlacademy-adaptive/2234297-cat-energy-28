let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav__toggle');
let header = document.querySelector('.header');
let mapNoJs = document.querySelector('.map__image');
let mapFrame = document.querySelector('.map__frame');

mapFrame.classList.remove('map__frame--nojs');
mapNoJs.classList.remove('map__image--nojs');
nav.classList.remove('nav--nojs');
header.classList.remove('header--nojs');
nav.classList.add('nav--closed');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  }
  else
    if (nav.classList.contains('nav--opened') &! nav.classList.contains('nav--closing')) {
      nav.classList.add('nav--closing');
      timer = setTimeout(() => {
          navMain.classList.remove('nav--closing');
          navMain.classList.add('nav--closed');
          navMain.classList.remove('nav--opened');
        }
        , 400);
  }
  else
    if (nav.classList.contains('nav--closing'))
    {
      clearTimeout(timer);
      nav.classList.remove('nav--closing');
      nav.classList.add('nav--opened');
    }
});
