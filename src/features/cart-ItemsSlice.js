import { createSlice, current } from "@reduxjs/toolkit";
import filterItems from "../utils/filterItems";

const initialState = { items: [] };
export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = filterItems(state.items, action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existItem = state.items.find((item) => item.id === itemId);

      if (existItem) {
        if (existItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== existItem.id);
          return;
        }

        state.items = state.items.map((item) => {
          if (existItem.id === item.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    },
  },
});

export const { addItem, removeItem, decreaseQuantity } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
