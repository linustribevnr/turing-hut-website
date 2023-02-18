import React from 'react'
import {Seo} from "../components/Seo"
import LandingPage from '../components/TuringCup/LandingPage'
import PastContests from '../components/TuringCup/PastContests'

export const Head = () => (
    <Seo routename={"turingcup"}/>
)

function turingcup() {
return (
    <div>
        <h1>Turing Cup</h1>
        <LandingPage />
        <PastContests />
    </div>
)
}

export default turingcup