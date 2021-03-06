import React from "react";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "src/components/Header";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#E50914",
      contrastText: "#F5F5F1",
    },
  },
  typography: {
    fontFamily: "Noto Sans, sans-serif",
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={outerTheme}>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
