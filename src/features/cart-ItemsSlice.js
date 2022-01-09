import { createSlice } from "@reduxjs/toolkit";
import filterItems from "../utils/filterItems";

const initialState = { items: [] };
export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = filterItems(state.items, action.payload);
    },
  },
});

export const { addItem } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
