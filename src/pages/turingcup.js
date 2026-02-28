import React from "react";
import Layout from "../components/Layout";
import { Seo } from "../components/Seo";
import "../components/TuringCup/turingcup.css";
import PastContests from "../components/TuringCup/PastContests";
import Timers from "../components/TuringCup/Timers";
import TuringCupPrizePool from "../components/TuringCup/TuringCupPrizePool";
import TuringCupSponsors from "../components/TuringCup/TuringCupSponsors";
import { Box, Typography, Button } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
import Landingpage2 from "../components/TuringCup/Landingpage2";
import Timelinee from "../components/TuringCup/Timelinee";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import RegisterForm from "./register";
import Faqs from "../components/TuringCup/Faqs";

import About from "../components/TuringCup/About";

export const Head = () => <Seo routename={"Turing Cup"} />;
var divStyle = {
  margin: 0
};
function Turingcup() {
  //const [isRegistering, setIsRegistering] = useState(true);

  return (
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
              fontFamily: "'Gruppo', cursive",
              border: "1px solid white"
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
              // marginBottom: "20px"
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 2,
                textAlign: "left",
                fontFamily: "'Gruppo', cursive",
                fontWeight: "bold",
                letterSpacing: "1px",
                textShadow: "0 0 15px rgba(242, 170, 76, 0.8)"
              }}
            >
              {/* REGISTRATION FOR ROUND-2 */}
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
              href="https://unstop.com/hackathons/turing-cup-2k26-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telangana-1634555"
              target="_blank"
              startIcon={<HowToRegRoundedIcon />}
            >
              Register
            </Button>
            {/* <RegisterForm /> */}
          </div>

          <About />
          <Timers /> 
          <Timelinee />
          <TuringCupPrizePool />
          <TuringCupSponsors />
          <Box sx={{ height: "50px" }} />
          <PastContests />
          <Faqs />
        </Box>
      </div>
    </Layout>
  );
}

export default Turingcup;
