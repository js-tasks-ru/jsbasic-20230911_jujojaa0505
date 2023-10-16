import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  elem = null;
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this._spanNumber();
    
    this._render();
  }
  
  _spanNumber = () => {
    let span = '';
    for (let i = 0; i < this.steps; i++) {
        span += `<span></span>
          `;}
          return span;}

  _render() {

     this.elem = createElement(this._template());
     this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");

     this.elem.addEventListener('click', (event) => {
      let sliderCoords = this.elem.getBoundingClientRect();
      let sliderLeft = sliderCoords.left;
      let sliderWidth = sliderCoords.width;
      let stepLengthPercent = 100/(this.steps - 1);

      let eventX = event.clientX;
      let eventXPercent = (eventX - sliderLeft) / sliderWidth * 100;
      this.value = Math.round(eventXPercent / stepLengthPercent);

      this.elem.querySelector(".slider__value").textContent = this.value;
      this.elem.querySelector(".slider__steps").children[this.value].classList.add("slider__step-active");
      this.elem.querySelector('.slider__thumb').style.left = this.value * stepLengthPercent + "%";
      this.elem.querySelector('.slider__progress').style.width = this.value * stepLengthPercent + "%";

      this.elem.dispatchEvent(new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      }))
    })
  }

  _template() {
    return `
    <div class="slider">
       <div class="slider__thumb">
          <span class="slider__value">${this.value}</span>
        </div>

      <div class="slider__progress"></div>
      <div class="slider__steps">
         ${this._spanNumber()}
      </div>`
  }
  }

