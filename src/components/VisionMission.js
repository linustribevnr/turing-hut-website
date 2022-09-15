import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function VisionMission() {
  return (
    <Box>
      <Box>
        <Grid container justifyContent="center" sx={{ my: 2 }}>
          <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h5"
                color="secondary"
                fontWeight={"bold"}
                sx={{ display: "inline" }}
              >
                We're on a mission to improve the programming&nbsp;
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                fontWeight={"bold"}
                sx={{ display: "inline" }}
              >
                Culture.
              </Typography>
              <Typography variant="body2" color="secondary" sx={{ my: 2 }}>
                Our mission is to unite people with motivated interest to foster
                a culture of learning in the community with regards to Computer
                Science.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
        <Grid item xs={12} sm={10} md={8} xl={6} sx={{ my: "auto" }}>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            color="secondary"
            sx={{ textAlign: "justify" }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            sx={{ textAlign: "justify" }}
          >
            Act as platform of “unity” to promote the `cause` of Computer
            Science. Develop a sense of belongingness amongst the pupils in the
            `impact` being created by Computer Science and it's applied concepts
            while appreciating its inter-disciplinary nature and recognizing the
            unique art of developing solutions through mathematical models
            evolving in scale to the emerging problems of the world today. And
            help explore knowledge, simulate study and research of and seek
            opportunities in Computer Science, with special regard given to
            Programming, as its members pave way for their career into the
            future.
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            color="secondary"
            sx={{ mt: 2, textAlign: "justify" }}
          >
            Formation
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            sx={{ textAlign: "justify" }}
          >
            The club was formed in 2017 as a Computer Science and Programming
            Special Interest Club. Mrs. B. V. Kiranmayee, Mrs. S. Nagini and
            Mrs. V. Baby from the Department of CSE, VNR VJIET are recognized as
            it's Honorary Founders. The club recognizes Kalidindi Prateek Varma,
            student at Department of CSE, VNR VJIET as its Founder. Priya
            Bhandari, J. Tarun Kumar and P. Venkat; students at Department of
            CSE, VNR VJIET are recognized as Co-Founders.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
