import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import LandingPage from '../components/TuringCup/LandingPage1'
import PastContests from '../components/TuringCup/PastContests';
import Timers from '../components/TuringCup/Timers';
import TuringCupPrizePool from '../components/TuringCup/TuringCupPrizePool';
import TuringCupSponsors from '../components/TuringCup/TuringCupSponsors';
import { Box, Toolbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const Head = () => ( 
    <Seo routename={"Turing Cup"}/>
)

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

function turingcup() {
return (
  <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navbar />
        <Box component="main">
          <Toolbar />
          <LandingPage style={{ margin:"0px",padding:"0px"}}/>
          <Timers/>
          <TuringCupPrizePool/>
          <TuringCupSponsors/>
          <PastContests/>
          <Footer />
        </Box>
      </Box>
  </ThemeProvider>
  // <Layout>
    // <LandingPage style={{margin:"0px",padding:"0px"}}/>
    // <Timers/>
    // <TuringCupPrizePool/>
    // <TuringCupSponsors/>
    // <PastContests/>
  // </Layout>
)
}

export default turingcup