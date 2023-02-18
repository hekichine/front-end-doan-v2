import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      state.filter((item) => item.id !== action.payload.id);
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addCart, removeCart } = actions;
export default reducer;
