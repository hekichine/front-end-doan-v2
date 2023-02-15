import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.data = action.payload;
    },
    removeProduct: (state) => {
      state.data = null;
    },
  },
});

const { reducer, actions } = productSlice;
export const { addProduct, removeProduct } = actions;
export default reducer;
