import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Typography, Box, Grid, Button } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Landing() {
  const data = useStaticQuery(graphql`
    query THLogoLandingQuery {
      file(relativePath: { eq: "turinghut_logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
          <GatsbyImage
            alt="Turing Hut Logo"
            image={data.file.childImageSharp.gatsbyImageData}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={7} sx={{ my: "auto" }}>
        <Typography variant="h4" color="secondary" fontWeight={"bold"}>
          Programming as a&nbsp;
          <Typography
            variant="h4"
            color="primary"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Sport.
          </Typography>
        </Typography>

        <Typography variant="h6" color="#000">
          Programming Club of VNRVJIET
        </Typography>
        <Typography variant="body1" color="secondary" align="justify">
          We work towards promoting the greater cause of Computer Science in the
          community by Orienting freshmen to the nature of Computer Science,
          organizing events, creating awareness about the opportunities to
          expand their knowledge and showcase their skills.
        </Typography>
        <Box>
          <Button variant="contained" sx={{ m: 1, textTransform: "none" }}>
            Become a member
          </Button>
          <Button variant="outlined" sx={{ m: 1, textTransform: "none" }}>
            Learn More
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
