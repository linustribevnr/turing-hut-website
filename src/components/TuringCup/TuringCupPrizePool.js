import React from "react";
import gif from "../../assets/images/Turingcup/Prizepool.gif";
import { Box } from "@mui/material";
export default function TuringCupPrizePool() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        component="img"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60vh"
        width="90vw"
        sx={{
          maxHeight: { xs: 360, md: 540, lg: 720 },
          maxWidth: { xs: 540, md: 810, lg: 1080 }
        }}
        alt="gif"
        src={gif}
      />
    </Box>
  );
}