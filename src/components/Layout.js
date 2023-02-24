import React,{useState,useEffect} from "react";
import { Box, Toolbar,Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

  const[bgcol,setbgcol] = useState('white');
  const[defp,setdefp] = useState(3);
  // const[defw,setdefw] = useState(1);
  useEffect(()=>
{
 if(window.location.pathname == '/turingcup')
 {
  setbgcol('#101820FF');
  setdefp(0);
  // setdefw(0);
 }
else
{
  setbgcol('white');
  setdefp(3);
  // setdefw(1);
}
  // console.log(bgcol);
});


  return (
    <ThemeProvider theme={theme} >
      <Grid sx={{ display: "flex" ,bgcolor:`${bgcol}`}}>
        <Navbar />
    <Box component="main" sx={{ width: 1,margin:0, }}>
          <Toolbar />
          {children}
          <Footer />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
