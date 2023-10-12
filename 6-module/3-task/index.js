import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  slides = [];
  
  constructor(slides) {
    this.slides = slides;

    this._render();
  }


  _render() {
     this.elem = createElement(this._template());

     this._initCarousel();

     let buttons = this.elem.querySelectorAll('.carousel__button');

     for (let b of buttons) {
      b.addEventListener("click", () => this.elem.dispatchEvent(new CustomEvent("product-add", {
      detail: b.closest(".carousel__slide").dataset.id,
      bubbles: true 
   })))
  }
}
  _initCarousel() {
    let position = 0;
    let left = this.elem.querySelector(".carousel__arrow_left");
    let right = this.elem.querySelector(".carousel__arrow_right");
  
    left.style.display = 'none';
  
    right.onclick = () => {
      let slideWidth = this.elem.querySelector(".carousel__slide").offsetWidth;
      position -= slideWidth;
      left.style.display = '';
      if (position <= -(this.slides.length - 1) * slideWidth) {
        right.style.display = 'none';
    }
    this.elem.querySelector(".carousel__inner").style.transform = `translateX(${position}px)`;
    }
  
    left.onclick = () => {
      let slideWidth = this.elem.querySelector(".carousel__slide").offsetWidth;
      position += slideWidth;
      right.style.display = '';
      if (position == 0) left.style.display = 'none';
      this.elem.querySelector(".carousel__inner").style.transform = `translateX(${position}px)`;
      }
  }

  _template() {
    return `
    <div class="carousel">
    <!--Кнопки переключения-->
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
  
    ${this.slides.map((slide) => {
      return `<div class="carousel__slide" data-id=${slide.id}>
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">${slide.price.toFixed(2)}€<!--значение slide.price--></span>
        <div class="carousel__title">${slide.name}<!--значение slide.name--></div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
    }).join('')}
    </div>
    </div>`
  }


}
