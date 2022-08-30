function closeMaodal(modalSelector) {
  const modal = document.querySelector(modalSelector); // Добовляем потомучто в не функции
  modal.classList.add('hide');
  modal.classList.remove('show');             
  document.body.style.overflow = ''; 
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector); // Добовляем потомучто в не функции
  // Можно через togle, но не безопасно
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden'; //убирает прокурутку при откртом модальном окне

  // из-за того что мы ее после первого применения удаялем
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal (triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
      //modalCloseBtn = document.querySelector('[data-close]');

// Применяем ко всем кнопкам
  modalTrigger.forEach(btn => { 
    // без стрел функц openModal выполн бы сразу из за того что вызвали и добавили аргумент
    // btn.addEventListener('click', () => openModal); так было до
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });

    //modalCloseBtn.addEventListener('click', closeMaodal); при клике просмто вызывает функцию

// Закрытие модального окна при нажатие за границы модального окна
    modal.addEventListener('click', (event) => {
      if (event.target === modal || event.target.getAttribute('data-close') == '') {
        closeMaodal(modalSelector);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && modal.classList.contains('show')) { //2 частьу словия если работаем через toggle
        closeMaodal(modalSelector);
      }
    });

// высчитываем конец страницы, работает не на всех экранах, можно добавить - 1 (153 строка)
// после первого раза удаляет такое событие (156)
    function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { 
        openModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
      }
    }

// Когда докричиваем до конца страницы выводим модальное окно
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeMaodal};
export{openModal};