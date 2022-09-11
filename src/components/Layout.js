import React from "react";
import { Box, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Navbar from "./Navbar";

const theme = createTheme({
  palette: {
    primary: green
  }
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          {children}
          <div>Footer</div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
