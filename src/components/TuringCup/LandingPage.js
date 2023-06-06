import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import landing_page from "../../assets/images/Turingcup/landing_page_2.jpg";

const styles = {
  landingPage: {
    backgroundImage: `url(${landing_page})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white"
  },
  backDrop: {
    backdropFilter: "blur(5px)",
    backgroundColor: "rgba(255,255,255,0.2)",
    border: "1px solid white",
    webkitTextStrokeWidth: " 1px ",
    webkitTextStrokeColor: "black"
  }
};
function LandingPage() {
  return (
    <Box border={1} borderRadius={1} style={styles.landingPage}>
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        <Grid
          container
          justifyContent="center"
          marginTop={5}
          sx={{ textAlign: "center" }}
        >
          <Typography
            border={1}
            borderRadius={2}
            padding={1}
            style={styles.backDrop}
          >
            <Typography fontSize="7vw">TURING CUP</Typography>
            <Typography variant="caption" fontSize="2vw">
              ONE TEAM,ONE DREAM
            </Typography>
          </Typography>
        </Grid>

        <Grid container justifyContent="flex-end" marginTop={5}>
          <Typography
            variant="h6"
            border={1}
            borderRadius={2}
            padding={1}
            style={styles.backDrop}
          >
            EDITION 2K22
          </Typography>
        </Grid>

        <Grid container justifyContent="center" marginTop={5}>
          <Typography
            variant="body1"
            border={1}
            borderRadius={2}
            padding={1}
            style={styles.backDrop}
          >
            25-03-2022 • VNRVJIET • HYDERABAD
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage;
