import React from 'react'
import {Seo} from "../components/Seo"
import LandingPage from '../components/TuringCup/LandingPage'

export const Head = () => (
    <Seo routename={"turingcup"}/>
)

function turingcup() {
return (
    <div>
        <h1>Turing Cup</h1>
        <LandingPage />
    </div>
)
}

export default turingcup