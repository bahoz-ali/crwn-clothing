import React from "react";
import "./s.cart_dropdown.scss";
import CustomButton from "../button/c.button";
import CartItem from "../cart_item/c.cart_item";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showCart } from "../../features/cartSlice";

function CartDropdown() {
  const items = useSelector((state) => state.cartItems.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty-message">you cart is empty</p>
        ) : (
          items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(showCart());
          navigate("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;
