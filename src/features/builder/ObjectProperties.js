import { createSlice } from "@reduxjs/toolkit";

export const objectProSlice = createSlice({
  name: "objectPro",
  initialState: {
    value: "",
  },
  reducers: {
    updateObjectPro: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateObjectPro } = objectProSlice.actions;

export default objectProSlice.reducer;
