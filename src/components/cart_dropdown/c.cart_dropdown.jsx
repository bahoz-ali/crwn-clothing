import React from "react";
import "./s.cart_dropdown.scss";
import CustomButton from "../button/c.button";
import CartItem from "../cart_item/c.cart_item";
import { useSelector } from "react-redux";

function CartDropdown() {
  const items = useSelector((state) => state.cartItems.items);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        }) }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
