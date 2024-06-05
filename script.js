'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn=> btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// const Allsectioons=document.querySelectorAll('.section')

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML= `We use cookie for improved functionality
// <button class="btn btn--close-cookie">Got it</button>`
// document.querySelector('.header').append(message);

// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   message.remove();
// })

// message.style.backgroundColor='#37383d';
// message.style.width ='120%'

// message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 40 +'px'


const btnScroollTo = document.querySelector('.btn--scroll-to');
const sectiion1 = document.querySelector('#section--1');

btnScroollTo.addEventListener('click',function(e){
sectiion1.scrollIntoView({behavior:'smooth'});
})

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     console.log('link');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// })

document.querySelector('.nav__links').addEventListener('click',
  function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  }
)