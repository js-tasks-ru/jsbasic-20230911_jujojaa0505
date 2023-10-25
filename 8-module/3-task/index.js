export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) return;
    else if (this.cartItems.length == 0) {
      this.cartItems.push({['product']: product, ['count']: 1});
      this.onProductUpdate(this.cartItems[0]);
      }
    else {
      for (let cartItem of this.cartItems) {
      if (cartItem.product.name == product.name) {
        cartItem.count++;
      }}
      else {
        this.cartItems.push({['product']: product, ['count']: 1});
      }
      this.onProductUpdate(cartItem);
    } 
  }
  

  updateProductCount(productId, amount) {
      for (let cartItem of this.cartItems) {
        
        if (cartItem.product.id == productId) {
          if (amount == 1) {
          cartItem.count++;
        }
        else {cartItem.count--;
          if (cartItem.count == 0) {
          this.cartItems.splice(this.cartItems.indexOf(cartItem), 1);
          }   
        }
       }
       this.onProductUpdate(cartItem);
      }
  }

  isEmpty() {
    return (this.cartItems.length ? false : true);
  }

  getTotalCount() {
    let totalCount = 0;
    for (let cartItem of this.cartItems) {
      totalCount += cartItem.count;
    }
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let cartItem of this.cartItems) {
       totalPrice += (cartItem.product.price * cartItem.count)
    }
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

