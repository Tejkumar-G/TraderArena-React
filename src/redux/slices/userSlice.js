import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  isLoading: false,
  isAuthenticated: null,
  strategyAccess: { view: false, create: false, edit: false, delete: false },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.isAuthenticated = action.payload;
    },

    setUser: (state, action) => {
      //{"id":6,"first_name":"test","last_name":"test","email":"test12@gma
      state.userDetails = action.payload;
      state.strategyAccess.view = action.payload?.strategy_access.includes('view')
      state.strategyAccess.create = action.payload?.strategy_access.includes('create')
      state.strategyAccess.edit = action.payload?.strategy_access.includes('edit')
      state.strategyAccess.delete = action.payload?.strategy_access.includes('delete')

    },

    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { updateAuth, setUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
