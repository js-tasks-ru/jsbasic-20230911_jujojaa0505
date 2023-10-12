import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  categories = [];

  constructor(categories) {
    this.categories = categories;

    this._render();
  }

  _render() {
    this.elem = createElement(this._template());
    
    let _scrollButtons = () => {
    let arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    let inner = this.elem.querySelector('.ribbon__inner');

    arrowRight.onclick = () => {inner.scrollBy(350, 0);
      arrowLeft.classList.add('ribbon__arrow_visible');
      let scrollRight = inner.scrollWidth - inner.scrollLeft - inner.clientWidth;
      if (scrollRight == 0) {
        arrowRight.classList.remove('ribbon__arrow_visible');
     };
    }
    arrowLeft.onclick = () => {inner.scrollBy(-350, 0);
      arrowRight.classList.add('ribbon__arrow_visible');

       if (inner.scrollLeft == 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      }
    }
    }
    _scrollButtons();

    
    let items = this.elem.querySelectorAll(".ribbon__item");
    for (let i of items) {
      i.onclick = (event) => {
        event.preventDefault();
        if (this.elem.querySelector(".ribbon__item_active")) {
          this.elem.querySelector(".ribbon__item_active").classList.remove("ribbon__item_active");
        }
        i.classList.add("ribbon__item_active");
      
        this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: i.dataset.id,
          bubbles: true
        }))
      }
    }
  }


  _template() {
    return `
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
         <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>

    <nav class="ribbon__inner">
      ${this.categories.map(cat => `<a href="#" class="ribbon__item" data-id=${cat.id}>${cat.name}</a>`).join('')
      }   
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`
  }

}
