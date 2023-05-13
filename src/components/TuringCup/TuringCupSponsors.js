import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
// /turingcupSponsors
import sponsordata from "../../assets/sponsors23.json";
import SponsorCard from "../../components/TuringCup/OurSponsors";

// import Logo from "../components/TuringCupPrizePool"

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#101820FF"
}));

export default function TuringCupSponsors() {
  const data = useStaticQuery(graphql`
    query SponsorQuery {
      allFile(filter: { relativeDirectory: { eq: "sponsors23" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 300
                height: 300
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { fit: COVER }
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
        margin: "0 auto"
      }}
    >
      <h2 style={{ textAlign: "center", color: "#F2AA4CFF" }}>OUR SPONSORS</h2>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="space-around"
        alignItems="center"
      >
        {sponsordata["sponsors"].map((sponsor, i) => {
          console.log(nodes);
          const result = nodes.filter(item => {
            const src =
              item.node?.childImageSharp?.gatsbyImageData.images.fallback.src;
            var filepath = /[^/]*$/.exec(src)[0];
            // console.log(src, filepath, sponsor.image);
            return filepath === sponsor.image;
          });
          //   console.log(result);
          let image;
          if (result.length === 1) {
            image = result[0].node.childImageSharp.gatsbyImageData;
          } else {
            console.log("Something is wrong");
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
