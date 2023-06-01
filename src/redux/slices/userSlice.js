import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
  isLoading: false,
  isAuthenticated: null,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setUser: (state, action) => {
      //{"id":6,"first_name":"test","last_name":"test","email":"test12@gma
      state.userDetails = action.payload;
    },

    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { updateAuth, setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
