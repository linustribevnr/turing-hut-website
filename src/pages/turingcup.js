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

  <ThemeProvider theme={theme} >
        <div style={{backgroundColor:"#101820FF",padding:'5'}}>
           {/* <Grid sx={{backgroundColor:"#101820FF",padding:'5'}}> */}
        <Navbar />
        <Box component="main" className="geometric-container">
          <Toolbar />
          <Landingpage2  />
          <Timers />
          <TuringCupPrizePool />
          <TuringCupSponsors />
          <PastContests />
          <Footer />
        </Box>
      {/* </Grid> */}
        </div>
     
  </ThemeProvider>
  // <Layout classname ="fullpage" >
  //     <Box sx={{ backgroundColor: "#101820FF",color: "#F2AA4CFF"}}>
  //       <Landingpage2 style={{ margin:"0px",padding:"0px"}}/>
  //       <Timers/>
  //       <TuringCupPrizePool/>
  //       <TuringCupSponsors/>
  //       <PastContests/>
  //     </Box>
  // </Layout>
)
}

export default turingcup