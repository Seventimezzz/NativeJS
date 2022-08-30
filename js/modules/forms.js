import {closeMaodal, openModal} from './modal';
import {postData} from '../services/services';

function forms (formSelector, modalTimerId) {
    const forms = document.querySelectorAll(formSelector);

    const message = {
      loading: 'img/forms/spiner.svg',
      success: 'Мы вам перезвоним',
      failure: 'Что-то пошло не так...'
    };
    
    forms.forEach(item => {
      bindPostData(item);
    });
    
    function bindPostData(form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
    
          let statusMessage = document.createElement('img');
          statusMessage.src = message.loading;
          statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
          `;
          // form.append(statusMessage);
          //Модификация для флекс бокса на странице, вместо верхней страницы
          form.insertAdjacentElement('afterend', statusMessage);
      
          // Данные из формы
          const formData = new FormData(form);
    
          // formData.entries() Объект превращаем в массив с масивами
          // Object.fromEntries Затем првращаем в объект
          // JSON.stringify и затем в JSON
          const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
          postData('http://localhost:3000/requests', json)
          // .then(data => data.text()) транфомация данных не нужна
          .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
          }).catch(() => {
            showThanksModal(message.failure);
          }).finally(() => {
            form.reset();
          });
      });
    }
    
    function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');
    
      prevModalDialog.classList.add('hide');
      openModal('.modal', modalTimerId);
    
      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
        <div class="modal__content">
          <div class="modal__close" data-close>×</div>
          <div class="modal__title">${message}</div>
        </div>
      `;
    
      document.querySelector('.modal').append(thanksModal);
      setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeMaodal('.modal');
      }, 4000);
    }
    
      fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res));
}

export default forms;