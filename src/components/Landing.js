import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Typography, Box, Grid, Button, Divider } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Landing() {
  const data = useStaticQuery(graphql`
    query LandingImggQuery {
      file(relativePath: { eq: "turinghut_logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            blurredOptions: { width: 100 }
            placeholder: BLURRED
          )
        }
      }
    }
  `);

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid item xs={12} md={4}>
        <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
          <GatsbyImage
            alt="Turing Hut Logo"
            image={data.file.childImageSharp.gatsbyImageData}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={7} sx={{ my: "auto" }}>
        <Box>
          <Typography
            variant="h3"
            color="secondary"
            fontWeight={700}
            sx={{ display: "inline", letterSpacing: 1 }}
          >
            Programming as a&nbsp;
          </Typography>
          <Typography
            variant="h3"
            color="primary"
            fontWeight={700}
            sx={{ display: "inline", letterSpacing: 1 }}
          >
            Sport.
          </Typography>
        </Box>
        <Typography
          variant="h6"
          color="#242222ff"
          sx={{ mt: 1, mb: 2, fontWeight: 500, letterSpacing: 0.5 }}
        >
          "Programming Club of VNR VJIET"
        </Typography>
        <Divider sx={{ my: 2, borderColor: "#1976d2" }} />
        <Typography
          variant="body1"
          color="text.primary"
          align="justify"
          sx={{
            mb: 3,
            fontSize: "1.15rem",
            lineHeight: 1.7,
            textIndent: 16,
            maxWidth: 1000
          }}
        >
          We work towards promoting the greater cause of Computer Science in the
          community by orienting freshmen to the nature of Computer Science,
          organizing events, and creating awareness about opportunities to
          expand their knowledge and showcase their skills.
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
            flexWrap: "wrap"
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://groups.google.com/g/turing-hut-members"
            target="_blank"
            rel="noreferrer"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              boxShadow: 2,
              borderRadius: 2,
              px: 3
            }}
          >
            Become a Member
          </Button>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 3
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
}
