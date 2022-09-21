import { createSlice } from "@reduxjs/toolkit";

export const objectProSlice = createSlice({
  name: "objectPro",
  initialState: {
    value: "",
  },
  reducers: {
    updateObjectPro: {
      reducer(state, action) {
        state.value = action.payload;
      },
      prepare(title, content) {
        return {
          payload: {
            title,
            content,
          },
        };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateObjectPro } = objectProSlice.actions;

export default objectProSlice.reducer;
