import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./core/store";

export type ThemeState = {
  theme: "dark" | "light" | "default";
  systemTheme: "dark" | "light" | "not-ready";
};

const initialState: ThemeState = {
  theme: "default",
  systemTheme: "not-ready",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.theme = "dark";
    },
    enableLightMode: (state) => {
      state.theme = "light";
    },
    setSystemTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.systemTheme = action.payload;
    },
    toggleDarkMode: (state) => {
      state.theme = state.theme == "dark" ? "light" : "dark";
    },
  },
});

export const {
  enableDarkMode,
  enableLightMode,
  setSystemTheme,
  toggleDarkMode,
} = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
