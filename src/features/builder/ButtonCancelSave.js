import { createSlice } from "@reduxjs/toolkit";

export const btnCancelSaveSlice = createSlice({
  name: "btnCancelSave",
  initialState: {
    value: false,
  },
  reducers: {
    updateCancelSave: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCancelSave } = btnCancelSaveSlice.actions;

export default btnCancelSaveSlice.reducer;
