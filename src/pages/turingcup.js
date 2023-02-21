import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import '../components/TuringCup/turingcup.css';
import PastContests from '../components/TuringCup/PastContests';
import Timers from '../components/TuringCup/Timers';
import TuringCupPrizePool from '../components/TuringCup/TuringCupPrizePool';
import TuringCupSponsors from '../components/TuringCup/TuringCupSponsors';
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Landingpage2 from '../components/TuringCup/Landingpage2';
import Timelinee from '../components/TuringCup/Timelinee';


export const Head = () => ( 
    <Seo routename={"Turing Cup"}/>
)

function turingcup() {
return (
//
  
  <Layout sx={{margin:0}} >
      <Box sx={{ backgroundColor: "#101820FF",color: "#F2AA4CFF"}}>
        <Landingpage2 style={{ margin:"0px",padding:"0px"}}/>
        <Timers/>
        <Timelinee/>
        <TuringCupPrizePool/>
        <TuringCupSponsors/>
        <PastContests/>
      </Box>
  </Layout>
)
}

export default turingcup