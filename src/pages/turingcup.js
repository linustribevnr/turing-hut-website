import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import LandingPage from '../components/TuringCup/LandingPage';
import PastContests from '../components/TuringCup/PastContests';
import Timers from '../components/TuringCup/Timers';
import TuringCupPrizePool from '../components/TuringCup/TuringCupPrizePool';
import TuringCupSponsors from '../components/TuringCup/TuringCupSponsors';


export const Head = () => (
    <Seo routename={"turingcup"}/>
)

function turingcup() {
return (
  <Layout>
    {/* <LandingPage/> */}
    {/* <Timers/> */}
    {/* <TuringCupPrizePool/> */}
    {/* <TuringCupSponsors/> */}
    {/* <PastContests/> */}
  </Layout>
)
}

export default turingcup