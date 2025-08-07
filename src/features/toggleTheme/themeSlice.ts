import { createSlice } from "@reduxjs/toolkit";
import type { DefaultTheme } from "styled-components";

// theme
export const lightTheme: DefaultTheme = {
  text: "#111517",
  background: "#fff",
};

export const darkTheme: DefaultTheme = {
  text: "#fff",
  background: "#202C36",
};

// Slice
interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
