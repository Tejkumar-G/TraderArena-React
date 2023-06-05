import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerOpen: false,
  isLoading: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setDrawerOpen: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { setDrawerOpen, setLoading } = layoutSlice.actions;

export default layoutSlice.reducer;
