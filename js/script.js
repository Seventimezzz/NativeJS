'use strict';

import tabs  from './modules/tabs';
import modal  from './modules/modal';
import timer  from './modules/timer';
import slider  from './modules/slider';
import cards  from './modules/cards';
import calc  from './modules/calc';
import forms  from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000); 

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2022-09-20');
  slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    slide: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    wrapper: '.offer__slider-wrapper',
    currentCounter: '#current',
    totalCounter: '#total',
    field: '.offer__slider-inner'
  });
  cards();
  calc();
  forms('form', modalTimerId);

  // const tabs = require('./modules/tabs'),
  //       modal = require('./modules/modal'),
  //       timer = require('./modules/timer'),
  //       slider = require('./modules/slider'),
  //       cards = require('./modules/cards'),
  //       calc = require('./modules/calc'),
  //       forms = require('./modules/forms');

  // tabs();
  // modal();
  // timer();
  // slider();
  // cards();
  // calc();
  // forms();

}); // Конец скрипта

 



