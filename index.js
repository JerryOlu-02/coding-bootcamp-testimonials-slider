'use strict';

const prevBtn = document.querySelector('.previous--btn');
const nextBtn = document.querySelector('.next--btn');

const imageSlider = document.querySelector('.image--slider');
const textContent1 = document.querySelector('.text--container');
const textContent2 = document.querySelector('.second--text--container');

let images = ['image-tanya', 'image-john'];
let x = 0;

const textChanges = function () {
  if (x == 0) {
    textContent1.classList.add('active');
    textContent2.classList.remove('active');
  } else {
    textContent1.classList.remove('active');
    textContent2.classList.add('active');
  }
};

const prevImg = function () {
  x--;
  if (x < 0) x = images.length - 1;
  textChanges();
  imageSlider.src = `images/${images[x]}.webp`;
};

const nextImg = function () {
  x++;
  if (x === images.length) x = 0;
  textChanges();
  imageSlider.src = `images/${images[x]}.webp`;
};

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);
