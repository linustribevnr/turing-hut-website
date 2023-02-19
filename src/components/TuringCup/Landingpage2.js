import { Grid } from '@mui/material'
import React from 'react'
import './LandingPage2.css'
function Landingpage2() {
  return (
    <Grid className='fullpage'>
        <svg viewBox='0 0 1300 300'>
            <text x="50%" y="70%" fill='transparent' textAnchor='middle' className='bigh'>
                TURING  CUP
            </text>
        </svg>
        <svg viewBox='0 0 1300 200'>
            <text x="50%" y="26%" fill='transparent' textAnchor='middle' className='smallh'>
                ONE TEAM , ONE DREAM!
            </text>
        </svg>
        
        {/* <h1>hi</h1> */}
    </Grid>
  )
}

export default Landingpage2