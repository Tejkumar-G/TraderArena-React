import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import layout from "./slices/layoutSlice";

const store = configureStore({
  reducer: { user, layout },
});

export default store;
