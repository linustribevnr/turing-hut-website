import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import '../components/TuringCup/turingcup.css';
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
  <ThemeProvider theme={theme} >
      <Box sx={{ display: "flex" ,backgroundColor:"black"}}>
        <Navbar />
        <Box component="main" className="geometric-container">
          <Toolbar />
          <LandingPage className="infoo" style={{ margin:"0px",padding:"0px"}}/>
          <Timers className="infoo"/>
          <TuringCupPrizePool className="infoo"/>
          <TuringCupSponsors className="infoo"/>
          <PastContests className="infoo"/>
          <div className="geometric-form child-1"></div>
          <div className="geometric-form child-2"></div>
          <div className="geometric-form child-3"></div>
          <div className="geometric-form child-4"></div>
          <div className="geometric-form child-5"></div>
          <div className="geometric-form child-6"></div>
          <div className="geometric-form child-7"></div>
          <div className="geometric-form child-8"></div>
          <div className="geometric-form child-9"></div>
          <div className="geometric-form child-10"></div>
          <div className="geometric-form child-11"></div>
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