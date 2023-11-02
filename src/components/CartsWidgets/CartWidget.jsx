import React from 'react';

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <i className="material-icons">shopping_cart</i>
      <span className="badge">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
