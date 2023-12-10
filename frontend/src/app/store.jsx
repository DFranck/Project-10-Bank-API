import { configureStore } from "@reduxjs/toolkit";

const userReducer = () => ({});

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
