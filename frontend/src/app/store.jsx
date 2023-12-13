import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "../features/auth/authSlice";
import { userApi } from "../services/userApi";
import { editNameSlice } from "../features/editName/editNameSlice";
export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    editName: editNameSlice.reducer,
  }),
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
setupListeners(store.dispatch);
