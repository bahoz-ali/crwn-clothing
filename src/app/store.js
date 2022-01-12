import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
import cartItemsReducer from "../features/cart-ItemsSlice";
import sectionReducer from "../features/directorySlice";
import shopSlice from "../features/shopSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    cartItems: cartItemsReducer,
    section: sectionReducer,
    shop: shopSlice,
  },
});
