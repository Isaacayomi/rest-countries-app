import { createSlice } from "@reduxjs/toolkit";

// Slice
export interface ThemeState {
  light: boolean;
}

const initialState: ThemeState = {
  light: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.light = !state.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
