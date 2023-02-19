import React from "react";
import gif from "../../assets/images/Turingcup/PrizepoolTuringCupGif.gif";
import { Box } from "@mui/material";
export default function TuringCupPrizePool() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        component="img"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        width="70vw"
        // sx={{
        //   maxHeight: { xs: 233, md: 500 },
        //   maxWidth: { xs: 350, md: 550 }
        // }}
        alt="gif"
        src={gif}
      />
    </Box>
  );
}