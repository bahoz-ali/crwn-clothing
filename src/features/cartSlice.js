import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showCart } = cartSlice.actions;
export default cartSlice.reducer;
