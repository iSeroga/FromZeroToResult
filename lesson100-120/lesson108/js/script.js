require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill'; 

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import serverForms from './modules/serverForms';
import calc from './modules/calc';
import slider from './modules/slider';
import openModal from './modules/modal';

window.addEventListener('DOMContentLoaded', () =>{

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items','tabheader__item_active');
  modal('[data-modal]','.modal', modalTimerId);
  timer('.timer', '2022-11-7');
  cards();
  calc();
  serverForms('form', modalTimerId);
  slider({
    container:'.offer__slider',
    nextArrow:'.offer__slider-next',
    prevArrow:'.offer__slider-prev',
    totalCounter:'#total',
    currentCounter:'#current',
    slide:'.offer__slide',
    wrapper:'.offer__slider-wrapper',
    field:'.offer__slider-inner'
  });
});