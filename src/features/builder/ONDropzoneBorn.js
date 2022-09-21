import { createSlice } from "@reduxjs/toolkit";

export const dropzoneBornSlice = createSlice({
  name: "dropzoneBorn",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementDropzone: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementDropzone } = dropzoneBornSlice.actions;

export default dropzoneBornSlice.reducer;
