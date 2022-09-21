import { createSlice } from "@reduxjs/toolkit";

export const generalProSlice = createSlice({
  name: "generalPro",
  initialState: {
    value: "",
  },
  reducers: {
    updateGeneralPro: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateGeneralPro } = generalProSlice.actions;

export default generalProSlice.reducer;
