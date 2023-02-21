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
import Landingpage2 from '../components/TuringCup/Landingpage2';
import Timeline from '../components/TuringCup/Timeline'

import {Grid} from "@mui/material"


export const Head = () => ( 
    <Seo routename={"Turing Cup"}/>
)

const theme = createTheme({
  palette: {
    primary: {
      main: "#101820FF"
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

  
  <Layout sx={{margin:0}} >
      <Box sx={{ backgroundColor: "#101820FF",color: "#F2AA4CFF"}}>
        <Landingpage2 style={{ margin:"0px",padding:"0px"}}/>
        <Timers/>
        <TuringCupPrizePool/>
        <TuringCupSponsors/>
        <PastContests/>
      </Box>
  </Layout>
)
}

export default turingcup