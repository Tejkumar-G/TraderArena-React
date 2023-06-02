import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerOpen: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setDrawerOpen: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { setDrawerOpen } = layoutSlice.actions;

export default layoutSlice.reducer;
