import React from "react";
import { Typography } from "@mui/material";


export default function About() {
  return (
    <div>
      <Typography
        variant="h3"
        mt={5}
        sx={{
          textAlign:"center",
          fontFamily: "'Gruppo', cursive",
          fontWeight: "bold",
          letterSpacing: "1px",
          textShadow: "0 0 15px rgba(242, 170, 76, 0.8)"
        }}
      >
        About
      </Typography>
      <p
        style={{
          fontSize: "1.5rem",
          width: "70%",
          textAlign: "justify",
          margin: "auto"
        }}
      >
        <p>
          The Annual National level Flagship Coding Contest organized by Turing
          Hut, the programming club of VNR VJIET where college students across
          the nation participate in teams of 2, to win exciting cash prizes.
          <br />
          The shortlisted participants get to experience a visit to the
          institute where they again compete in an Off-site round under the
          stipulated time limits.
          <br />
        </p>
      </p>
    </div>
  );
}
