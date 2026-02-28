import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import { graphql, useStaticQuery } from "gatsby";
import sponsordata from "../../assets/sponsors26.json";
import SponsorCard from "../../components/TuringCup/OurSponsors";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#101820FF"
}));

export default function TuringCupSponsors() {
  const data = useStaticQuery(graphql`
    query SponsorQuery {
      allFile(filter: { relativeDirectory: { eq: "sponsors26" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                height: 1000
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { fit: CONTAIN }
              )
            }
          }
        }
      }
    }
  `);

  const nodes = data.allFile.edges;
  return (
    <Box
      sx={{
        margin: "50px auto"
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
        OUR SPONSORS
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-around"
        alignItems="center"
      >
        {sponsordata["sponsors"].map((sponsor, i) => {
          const result = nodes.filter(item => {
            const src =
              item?.node?.childImageSharp?.gatsbyImageData.images.fallback.src;
            var filepath = /[^/]*$/.exec(src)[0];
            return filepath === sponsor.image;
          });
          let image;
          if (result.length === 1) {
            image = result[0].node.childImageSharp.gatsbyImageData;
          } else {
            console.log("Something is wrong in TuringCupSponsors.js");
          }
          return (
            <Item key={i}>
              <SponsorCard
                name={sponsor.name}
                img={image}
                desc={sponsor.details}
                link={sponsor.link}
                key={i}
              />
            </Item>
          );
        })}
      </Stack>
    </Box>
  );
}
