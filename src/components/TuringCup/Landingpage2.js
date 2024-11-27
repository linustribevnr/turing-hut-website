import { Button, Grid, Stack } from "@mui/material";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import InsertInvitationRoundedIcon from "@mui/icons-material/InsertInvitationRounded";
// npm install add-to-calendar-button to avail features of add to calendar.
import { atcb_action } from "add-to-calendar-button";

import React from "react";
import "./LandingPage2.css";
import TuringCupSponsors from "./TuringCupSponsors";
function Landingpage2() {
  // console.log("PROCESS>ENV  : ", process.env.API_KEY)

  const config = {
    name: "[Reminder] Turing Cup 2K24 Round - 1",
    description: "Check your mail for the Contest Links",
    startDate: "2024-03-09",
    startTime: "18:00",
    endTime: "20:00",
    options: ["Google", "Apple", "Outlook.com"],
    timeZone: "Asia/Calcutta"
  };
  const handleClick = () => {
    atcb_action(config, document.getElementById("add-to-calendar-btn"));
  };

  return (
    <Grid
      className="fullpage"
      style={{ fontFamily: "'Gruppo', cursive", marginBottom: "16px" }}
    >
      <svg viewBox="0 0 1300 300">
        <text
          x="50%"
          y="70%"
          fill="transparent"
          textAnchor="middle"
          className="bigh"
        >
          TURING CUP
        </text>
      </svg>
      <svg viewBox="0 0 1300 200">
        <text
          x="50%"
          y="26%"
          fill="transparent"
          textAnchor="middle"
          className="smallh"
        >
          ONE TEAM , ONE DREAM!
        </text>
      </svg>

      {/* <h1>hi</h1> */}
      <Stack
        style={{ marginTop: "-40px" }}
        sx={{ p: 5, justifyContent: "center" }}
        direction={{ xs: "column", md: "row" }}
        spacing={2}
      >
        {/* <Button
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
          href="https://unstop.com/p/turing-cup-2k24-vallurupalli-nageswara-rao-vignana-jyothi-institute-of-engineering-technology-telangana-898184"
          target="__blank"
          startIcon={<HowToRegRoundedIcon />}
        >
          Register For Round-2
        </Button> */}

        {/* <Button
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
          id="add-to-calendar-btn"
          onClick={handleClick}
          variant="contained"
          endIcon={<InsertInvitationRoundedIcon />}
        >
          Add to Calendar
        </Button>  */}
      </Stack>
    </Grid>
  );
}

export default Landingpage2;
