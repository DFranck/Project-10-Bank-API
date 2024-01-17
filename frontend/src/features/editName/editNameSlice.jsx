import { createSlice } from "@reduxjs/toolkit";
export const editNameSlice = createSlice({
  name: "editName",
  initialState: {
    display: false,
    firstName: null,
    lastName: null,
  },
  reducers: {
    handleForm: (state) => {
      state.display = !state.display;
      // console.log("EditName form, display :", state.display);
    },
  },
});

export const { setName, handleForm } = editNameSlice.actions;
