import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeNames } from "../lib/styles/theme";
import storage from "../lib/utils/storage";
import { RootState } from "./core/store";

export type ThemeState = {
  theme: ThemeNames;
};

const initialState: ThemeState = {
  theme: "default",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.theme = "dark";
      storage.setItem("theme", state.theme);
    },
    enableLightMode: (state) => {
      state.theme = "light";
      storage.setItem("theme", state.theme);
    },
    setMode: (state, action: PayloadAction<ThemeNames>) => {
      state.theme = action.payload;
      storage.setItem("theme", state.theme);
    },
    toggleDarkMode: (state) => {
      state.theme = state.theme == "dark" ? "light" : "dark";
      storage.setItem("theme", state.theme);
    },
  },
});

export const { enableDarkMode, enableLightMode, setMode, toggleDarkMode } =
  themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
