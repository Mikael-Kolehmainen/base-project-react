import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
  name: "example",
  initialState: {
    example: null,
  },
  reducers: {
    saveExample: (state, action) => {
      state.example = action.payload;
    },
    clearExample: (state) => {
      state.example = null;
    },
  },
});

export const { saveExample, clearExample } = exampleSlice.actions;

export default exampleSlice.reducer;
