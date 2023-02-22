import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import '../components/TuringCup/turingcup.css';
import PastContests from '../components/TuringCup/PastContests';
import Timers from '../components/TuringCup/Timers';
import TuringCupPrizePool from '../components/TuringCup/TuringCupPrizePool';
// import TuringCupSponsors from '../components/TuringCup/TuringCupSponsors';
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Landingpage2 from '../components/TuringCup/Landingpage2';
import Timelinee from '../components/TuringCup/Timelinee';
import TuringCupSponsors from '../components/TuringCup/TuringCupSponsors';
import '../styles/global.css';

import Faqs from '../components/TuringCup/Faqs'

import About from '../components/TuringCup/About';



export const Head = () => ( 
    <Seo routename={"Turing Cup"}/>
)
var divStyle = {
  margin: 0
}
function turingcup() {
return (
//
  
  <Layout sx={{margin:0}} >
    <div style={divStyle}>
      <Box sx={{ backgroundColor: "#101820FF",color: "#F2AA4CFF" , fontFamily: "'Gruppo', cursive"}}>
        <Landingpage2 style={{ margin:"0px",padding:"0px", fontFamily: "'Gruppo', cursive"}}/>
        <About/>
        <Timers/>
        <Timelinee/>
        <TuringCupPrizePool/>
        <TuringCupSponsors/>
        <PastContests/>
        <Faqs />
      </Box>
      </div>
  </Layout>
)
}

export default turingcup
