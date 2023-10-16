import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = createElement(this._template());
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add("is-modal-open");

    document.body.querySelector(".modal__close").onclick = () => this.close();
    document.addEventListener('keydown', this._keydown);
   }
  
   setTitle(modalTitle) {
     this.elem.querySelector(".modal__title").textContent = modalTitle;
  }

  setBody(node){
    this.elem.querySelector(".modal__body").innerHTML = '';
    this.elem.querySelector(".modal__body").append(node);
  }

  close() {
  const element = document.body.querySelector(".modal");
  if (element) element.remove();
  document.body.classList.remove("is-modal-open"); 
  document.removeEventListener('keydown', this._keydown);
 }

 _keydown = (event) => {
  if (event.code == 'Escape') this.close();
} 


 _template() {
   return `
   <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
        Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
      A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>

  </div>`
 }

}
