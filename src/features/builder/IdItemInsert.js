import { createSlice } from "@reduxjs/toolkit";

export const idItemInsertSlice = createSlice({
  name: "idItemInsert",
  initialState: {
    value: "",
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = idItemInsertSlice.actions;

export default idItemInsertSlice.reducer;
