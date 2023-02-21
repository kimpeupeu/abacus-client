import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../models/core/store";
import { ThemeProvider } from "styled-components";
import { useAppSelector } from "../models/core/hooks";
import { themes } from "../lib/styles/theme";
import GlobalStyles from "../lib/styles/GlobalStyles";

import "../styles/globals.css";

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </CustomThemeProvider>
    </Provider>
  );
}
