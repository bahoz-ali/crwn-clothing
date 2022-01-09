import React from "react";
import "./s.card_icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../../features/cartSlice";
import { createSelector } from "reselect";

function CartIcon() {
  const dispatch = useDispatch();

  const itemsState = (state) => state.cartItems.items;
  const selectTotalItems = createSelector(itemsState, (items) =>
    items.reduce((subtotal, item) => subtotal + item.quantity, 0)
  );
  const countItemsToBuy = useSelector(selectTotalItems);

  return (
    <div onClick={() => dispatch(showCart())} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItemsToBuy}</span>
    </div>
  );
}

export default CartIcon;
