import { createSlice } from "@reduxjs/toolkit";

export const itemTBGeneralSlice = createSlice({
  name: "itemTBGeneral",
  initialState: {
    value: false,
  },
  reducers: {
    updateItemTBGeneral: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateItemTBGeneral } = itemTBGeneralSlice.actions;

export default itemTBGeneralSlice.reducer;
