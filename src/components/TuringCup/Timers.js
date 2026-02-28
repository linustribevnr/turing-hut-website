import React, { useEffect, useRef, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import "./headingstyles.css";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  background: "#101820FF",
  height: 100,
  color: "#F2AA4CFF",
  border: "2px solid #F2AA4CFF",
  borderRadius: "12px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  transition: "0.3s ease-in-out",
  boxShadow: "0 4px 15px rgba(242, 170, 76, 0.3)",
  "&:hover": {
    boxShadow: "0 0 20px rgba(242, 170, 76, 0.8)"
  }
}));

function Timers() {
  const [daysLeft, setDaysLeft] = useState("00");
  const [hoursLeft, setHoursLeft] = useState("00");
  const [minutesLeft, setMinutesLeft] = useState("00");
  const [secondsLeft, setSecondsLeft] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("February 28, 2026 20:30:00").getTime();

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
        paddingX: "5px",
        "@media (min-width: 960px)": {
          width: "75%"
        }
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontFamily: "'Gruppo', cursive",
          fontWeight: "bold",
          letterSpacing: "1px",
          textShadow: "0 0 15px rgba(242, 170, 76, 0.8)"
        }}
      >
        ROUND-1 STARTS IN
      </Typography>
      <Grid
        container
        justifyContent={"space-evenly"}
        spacing={3}
        paddingX={2}
        mt={3}
        mb={5}
      >
        {[
          { label: "DAYS", value: daysLeft },
          { label: "HOURS", value: hoursLeft },
          { label: "MINUTES", value: minutesLeft },
          { label: "SECONDS", value: secondsLeft }
        ].map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Item elevation={3}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  margin: "0",
                  textShadow: "0 0 15px rgba(242, 170, 76, 0.8)"
                }}
              >
                {item.value}
              </h1>
              <h4
                style={{
                  fontFamily: "'Gruppo', cursive",
                  letterSpacing: "1px",
                  fontSize: "1.2rem",
                  margin: "0"
                }}
              >
                {item.label}
              </h4>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Timers;
