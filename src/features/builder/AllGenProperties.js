import { createSlice } from "@reduxjs/toolkit";

export const allGenProSlice = createSlice({
  name: "allGenPro",
  initialState: {
    value: {},
  },
  reducers: {
    updateAllGenPro: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAllGenPro } = allGenProSlice.actions;

export default allGenProSlice.reducer;
