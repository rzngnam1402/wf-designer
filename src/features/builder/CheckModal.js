import { createSlice } from "@reduxjs/toolkit";

export const checkModalSlice = createSlice({
  name: "checkModal",
  initialState: {
    value: {
      check: false,
      nameItem: "",
    },
  },
  reducers: {
    updateModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateModal } = checkModalSlice.actions;

export default checkModalSlice.reducer;
