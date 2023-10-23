import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  elem = null;

  constructor(products) {
    this.products = products;
    this.filters = {};
    this._render();
  }

  _render() {
     this.elem = createElement(this._template());
  }

  _template() { return `
    <div class="products-grid">
  <div class="products-grid__inner">
    ${this.products.map(product => {
      let productCard = new ProductCard(product);
      return productCard._template()}).join('')}
  </div>
</div>`
  }

  updateFilter(filters) {
     
    if (filters.noNuts) {
      this.products = this.products.filter(product => filters.noNuts != product.nuts)
    }                                                                               
     
    if (filters.vegeterianOnly) {
      this.products = this.products.filter(product => filters.vegeterianOnly == product.vegeterian)
    }
    
    if (filters.vegeterianOnly) {
      this.products = this.products.filter(product => filters.vegeterianOnly == product.vegeterian)
    }
    if (filters.maxSpiciness) {
      this.products = this.products.filter(product => filters.maxSpiciness >= product.spiciness)
    }
    if (filters.category) {
        this.products = this.products.filter(product => filters.category == product.category)
    }
      
    this._render();
  }
}
