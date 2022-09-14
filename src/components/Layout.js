import React from "react";
import { Box, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16654f"
    },
    secondary: {
      main: "#616161"
    }
  }
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main" sx={{ p: 3, width: 1 }}>
          <Toolbar />
          {children}
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
