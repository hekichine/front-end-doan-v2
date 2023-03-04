import { createSlice } from "@reduxjs/toolkit";

const quickviewSlice = createSlice({
  name: "quickview",
  initialState: [],
  reducers: {
    addQuickview: (state, action) => {
      state.push(action.payload);
    },
    removeQuickview: (state) => {
      return [];
    },
  },
});

const { reducer, actions } = quickviewSlice;
export const { addQuickview, removeQuickview } = actions;
export default reducer;
