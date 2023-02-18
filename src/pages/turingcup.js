import React from 'react'
import Layout from '../components/Layout'
import {Seo} from "../components/Seo"
import LandingPage from '../components/TuringCup/LandingPage';

export const Head = () => (
    <Seo routename={"turingcup"}/>
)

function turingcup() {
return (
  <Layout>
    <LandingPage/>
  </Layout>
)
}

export default turingcup