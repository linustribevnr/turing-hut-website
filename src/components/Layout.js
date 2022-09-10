import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: green
  }
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>App Bar</div>
        <div>{children}</div>
        <div>Footer</div>
      </div>
    </ThemeProvider>
  );
}
