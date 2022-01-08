import React from "react";
import "./s.cart_dropdown.scss";
import CustomButton from "../button/c.button";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
