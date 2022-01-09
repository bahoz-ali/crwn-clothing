import React from "react";
import "./s.cart_item.scss";

//* this card is used inside (cart_dropdown.jsx)
function CartItem({ item: { name, price, quantity, imageUrl } }) {


  return (
    <div className="cart-item">
      <img src={imageUrl} alt="desert" />
      <div className="item-details">
        <p className="name">{name}</p>
        <p className="price">
          <span>{quantity}</span> x {price}$
        </p>
      </div>
    </div>
  );
}

export default CartItem;
