import "./s.checkoutPage.scss";
import React from "react";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/c.checkout_item";

function HeaderBlock({ headerName }) {
  return (
    <div className="header-block">
      <span className="header-text">{headerName}</span>
    </div>
  );
}

function CheckoutPage() {
  const stateCartItems = (state) => state.cartItems.items;
  const selectTotalMoney = createSelector(stateCartItems, (items) =>
    items.reduce((subtotal, item) => subtotal + item.quantity * item.price, 0)
  );
  const totalMoney = useSelector(selectTotalMoney);

  const cartItems = useSelector(stateCartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <HeaderBlock headerName="Product" />
        <HeaderBlock headerName="Description" />
        <HeaderBlock headerName="Quantity" />
        <HeaderBlock headerName="Price" />
        <HeaderBlock headerName="remove" />
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">
        <span>TOTAL: {totalMoney}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
