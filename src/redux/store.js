import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import layout from "./slices/layoutSlice";
import strategy from "./slices/strategySlice";


const store = configureStore({
  reducer: { user, layout, strategy },
});

export default store;
