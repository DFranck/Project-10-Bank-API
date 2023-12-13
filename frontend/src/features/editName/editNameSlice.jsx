import { createSlice } from "@reduxjs/toolkit";
export const editNameSlice = createSlice({
  name: "editName",
  initialState: {
    display: false,
    firstName: null,
    lastName: null,
  },
  reducers: {
    // setName: (state, action) => {
    //   state.auth.user.firstName = action.payload.firstName;
    //   state.auth.user.lastName = action.payload.lastName;
    // },
    handleForm: (state) => {
      state.display = !state.display;
      console.log("TUMEVOIS TUMEVOISPLUS", state.display);
    },
  },
});

export const { setName, handleForm } = editNameSlice.actions;
