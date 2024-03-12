import React, { useEffect, useRef, useState } from "react";
import { Grid, Paper } from "@mui/material";
import "./headingstyles.css";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "#101820FF",
  height: 100,
  color: "#F2AA4CFF",
  border: "1px solid #F2AA4CFF",
  borderRadius: "5px",
  width: "100%"
}));

function Timers() {
  const [daysLeft, setDaysLeft] = useState("00");
  const [hoursLeft, setHoursLeft] = useState("00");
  const [minutesLeft, setMinutesLeft] = useState("00");
  const [secondsLeft, setSecondsLeft] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("March 28, 2024 10:30:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDaysLeft(Math.floor(days / 10).toString() + (days % 10).toString());
        setHoursLeft(
          Math.floor(hours / 10).toString() + (hours % 10).toString()
        );
        setMinutesLeft(
          Math.floor(minutes / 10).toString() + (minutes % 10).toString()
        );
        setSecondsLeft(
          Math.floor(seconds / 10).toString() + (seconds % 10).toString()
        );
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      const intervalId = interval.current;
      clearInterval(intervalId);
    };

    return () => {
      clearInterval(interval.current);
    };
  });

  const isLargeScreen = useMediaQuery(theme => theme.breakpoints.up("lg"));
  return (
    <Grid
      sx={{
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        color: "primary",
        margin: "0 auto",
        textAlign: "center",
        background: "#101820FF",
        borderRadius: "5px",
        paddingTop: "20px",
        "@media (min-width: 960px)": {
          width: "75%"
        }
      }}
    >
      <h2 style={{ color: "#F2AA4CFF", fontFamily: "'Gruppo', cursive" }}>
        ROUND-2 STARTS IN
      </h2>

      <Grid container justifyContent={"space-evenly"}>
        <Grid item xs={6} md={3} sx={{ p: 2 }}>
          <Item
            elevation={0}
            sx={{
              backgroundColor: "#101820FF",
              border: "1px solid #F2AA4CFF"
            }}
          >
            <h1>{daysLeft}</h1>
            <h4 style={{ fontFamily: "'Gruppo', cursive" }}>DAYS</h4>
          </Item>
        </Grid>

        <Grid item xs={6} md={3} sx={{ p: 2 }}>
          <Item
            elevation={0}
            sx={{
              backgroundColor: "#101820FF",
              border: "1px solid #F2AA4CFF"
            }}
          >
            <h1>{hoursLeft}</h1>
            <h4 style={{ fontFamily: "'Gruppo', cursive" }}>HOURS</h4>
          </Item>
        </Grid>

        <Grid item xs={6} md={3} sx={{ p: 2 }}>
          <Item
            elevation={0}
            sx={{
              backgroundColor: "#101820FF",
              border: "1px solid #F2AA4CFF"
            }}
          >
            <h1>{minutesLeft}</h1>
            <h4 style={{ fontFamily: "'Gruppo', cursive" }}>MINUTES</h4>
          </Item>
        </Grid>

        <Grid item xs={6} md={3} sx={{ p: 2 }}>
          <Item
            elevation={0}
            sx={{
              backgroundColor: "#101820FF",
              border: "1px solid #F2AA4CFF"
            }}
          >
            <h1>{secondsLeft}</h1>
            <h4 style={{ fontFamily: "'Gruppo', cursive" }}>SECONDS</h4>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Timers;
