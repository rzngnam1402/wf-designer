import { createSlice } from "@reduxjs/toolkit";

export const btnSaveSlice = createSlice({
  name: "btnSave",
  initialState: {
    value: false,
  },
  reducers: {
    updateSave: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSave } = btnSaveSlice.actions;

export default btnSaveSlice.reducer;
