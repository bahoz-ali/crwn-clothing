import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
