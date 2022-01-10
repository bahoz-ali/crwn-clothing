import React from "react";
import "./s.checkout_item.scss";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseQuantity,
  removeItem,
} from "../../features/cart-ItemsSlice";

//* it's part of (Checkout-page component).
function CheckoutItem({ cartItem }) {
  const { id, name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="shopping clothes" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          style={{ cursor: "pointer", marginRight:"6px" }}
          onClick={() => dispatch(decreaseQuantity(id))}
        >
          &#10094;
        </span>
        {quantity}
        <span
          style={{ cursor: "pointer", marginLeft: "6px" }}
          onClick={() => dispatch(addItem(cartItem))}
        >
          &#10095;
        </span>
      </span>
      <span className="price">{price}$</span>
      <div onClick={() => dispatch(removeItem(id))} className="remove-button">
        &#10008;
      </div>
    </div>
  );
}

export default CheckoutItem;
