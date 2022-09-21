import { createSlice } from "@reduxjs/toolkit";

export const totalNodeSlice = createSlice({
  name: "totalNode",
  initialState: {
    value: [],
  },
  reducers: {
    updateNodeFirst: (state, action) => {
      state.value = action.payload;
    },
    updateNode: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateNode, updateNodeFirst } = totalNodeSlice.actions;

export default totalNodeSlice.reducer;
