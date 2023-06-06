import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  strategies: [],
  strategiesDetails: {},
  currentStrategy: {},
  myStrategies: [],
  myStrategiesDetails : {}
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

    setCurrentStrategy: (state, action) => {
      state.currentStrategy = action.payload;
    },

    setMyStrategies: (state, action) => {
      state.myStrategies = action.payload;
    },
  },
});

export const { setLoading, setStrategies, setCurrentStrategy, setMyStrategies } =
  strategySlice.actions;

export default strategySlice.reducer;
