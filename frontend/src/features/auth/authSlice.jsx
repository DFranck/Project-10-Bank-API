import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      console.log("Token is set", state.token);
    },
    login: (state, action) => {
      state.user = action.payload.user;
      console.log("User is logged in", state.user);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    updateProfile: (state, action) => {
      state.user = action.payload.user;
      console.log("Update User", state.user);
    },
  },
});

export const { login, setToken, logout, updateProfile } = authSlice.actions;
