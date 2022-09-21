import { createSlice } from "@reduxjs/toolkit";

export const idItemInsertSlice = createSlice({
  name: "idItemInsert",
  initialState: {
    value: "",
  },
  reducers: {
    updateIdItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateIdItem } = idItemInsertSlice.actions;

export default idItemInsertSlice.reducer;
