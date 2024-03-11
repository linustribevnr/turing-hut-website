import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import "../components/TuringCup/turingcup.css";
import PastContests from "../components/TuringCup/PastContests";
import Timers from "../components/TuringCup/Timers";
// import TuringCupPrizePool from "../components/TuringCup/TuringCupPrizePool";
import TuringCupSponsors from '../components/TuringCup/TuringCupSponsors';
import { Box, Button, Typography } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
import Landingpage2 from "../components/TuringCup/Landingpage2";
import Timelinee from "../components/TuringCup/Timelinee";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";

import Faqs from "../components/TuringCup/Faqs";

import About from "../components/TuringCup/About";

export const Head = () => <Seo routename={"Turing Cup"} />;
var divStyle = {
  margin: 0
};
function turingcup() {
  return (
    //

    <Layout sx={{ margin: 0 }}>
      <div style={divStyle}>
        <Box
          sx={{
            backgroundColor: "#101820FF",
            color: "#F2AA4CFF",
            fontFamily: "'Gruppo', cursive"
          }}
        >
          <Landingpage2
            style={{
              margin: "0px",
              padding: "0px",
              fontFamily: "'Gruppo', cursive"
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px"
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                pb: 2,
                fontFamily: ['"Gruppo"', "cursive"].join(","),
                color: "#F2AA4CFF",
                fontSize: "1.5rem"
              }}
            >
              REGISTRATION FOR ROUND-2
            </Typography>
            <Button
              sx={{
                fontFamily: ['"Gruppo"', "cursive"].join(","),
                backgroundColor: "#101820FF",
                color: "#F2AA4CFF",
                border: "1px solid #F2AA4CFF",
                "&:hover": {
                  backgroundColor: "#F2AA4CFF",
                  color: "#fff"
                }
              }}
              variant="contained"
              href="/register"
              startIcon={<HowToRegRoundedIcon />}
            >
              Register Now
            </Button>
          </div>
          <About />
          <Timers />
          <Timelinee />
          {/* <TuringCupPrizePool /> */}
          <TuringCupSponsors/>
          <PastContests />
          
          <Faqs />
        </Box>
      </div>
    </Layout>
  );
}

export default turingcup;
