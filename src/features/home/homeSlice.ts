import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

// export const {} = homeSlice.actions;

export default homeSlice.reducer;
