import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
import cartItemsReducer from "../features/cart-ItemsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer,
  },
});
