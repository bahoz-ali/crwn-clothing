import { createSlice, current } from "@reduxjs/toolkit";
import SHOP_DATA from "./shop.data";

const initialState = {
  collections: SHOP_DATA,
};
export const shopSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
});

export const {} = shopSlice.actions;
export default shopSlice.reducer;
