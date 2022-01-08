import React from "react";
import "./s.card_icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { showCart } from "../../features/cartSlice";

function CartIcon() {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(showCart())} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
