import React from "react";
import { Box, Toolbar, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useLocation } from "@reach/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/global.css";
const theme = createTheme({
  palette: {
    primary: {
      main: "#16654F"
    },
    secondary: {
      main: "#4C4D4F"
    }
  },
  typography: {
    h5: {
      fontSize: ["30px", "!important"]
    }
  }
});

export default function Layout({ children }) {
  const location = useLocation();
  const is_turingcup_page =
    location.pathname.includes("/turingcup") ||
    location.pathname.includes("/register");
  const bgcol = is_turingcup_page ? "#101820FF" : "white";

  return (
    <ThemeProvider theme={theme}>
      <Grid
        sx={{
          display: "flex",
          bgcolor: `${bgcol}`,
          margin: is_turingcup_page ? "0px" : "8px"
        }}
      >
        <Navbar />
        <Box component="main" sx={{ width: 1, margin: 0 }}>
          <Toolbar />
          {children}
          <Footer />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
