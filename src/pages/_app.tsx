import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../models/core/store";
import { ThemeProvider } from "styled-components";
import { useAppDispatch, useAppSelector } from "../models/core/hooks";
import { getCurrentTheme, themes } from "../lib/styles/theme";
import ResetStyles from "../lib/styles/ResetStyles";
import GlobalStyles from "../lib/styles/GlobalStyles";
import { setMode } from "../models/theme";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setMode(getCurrentTheme()));
  }, [dispatch]);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Component {...pageProps} />
        <ResetStyles />
        <GlobalStyles />
      </CustomThemeProvider>
    </Provider>
  );
}
