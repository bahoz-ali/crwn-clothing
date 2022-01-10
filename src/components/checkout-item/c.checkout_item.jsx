import React from "react";
import "./s.checkout_item.scss";

function CheckoutItem({ cartItem: { name, imageUrl, price, quantity } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="shopping clothes" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10008;</div>
    </div>
  );
}

export default CheckoutItem;
