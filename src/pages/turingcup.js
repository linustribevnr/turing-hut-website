import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import '../components/TuringCup/turingcup.css';
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
    
        <div className="geometric-container">
            <LandingPage className="infoo"/>
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
        </div>
    
  </Layout>
)
}

export default turingcup