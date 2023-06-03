import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  strategies: [],
  strategiesDetails: {},
};

export const strategySlice = createSlice({
  name: "strategy",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },

    setStrategies: (state, action) => {
      state.strategiesDetails = action.payload;
      state.strategies = action.payload.strategies;
    },
  },
});

export const { setLoading, setStrategies } = strategySlice.actions;

export default strategySlice.reducer;
