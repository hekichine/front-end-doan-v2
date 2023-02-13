import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlide";
//
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
