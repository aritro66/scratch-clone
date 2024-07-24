import { configureStore } from "@reduxjs/toolkit";
import motionSlice from "./motionSlice";

const store = configureStore({
  reducer: {
    data: motionSlice.reducer,
  },
});

export default store;
