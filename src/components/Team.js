import React, { useState } from "react";
import jsondata from "../assets/team_data.json";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import TeamCard from "../components/TeamCard";
import { graphql, useStaticQuery } from "gatsby";

export default function Team() {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allFile(filter: { relativeDirectory: { eq: "team" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 350
                height: 400
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

  const [year, setYear] = useState(Object.keys(jsondata.team).reverse()[0]);
  const handleChange = event => {
    setYear(event.target.value);
  };

  const nodes = data.allFile.edges;

  const faculty = jsondata["faculty"].map((val, i) => {
    const result = nodes.filter(item => {
      const src = item.node.childImageSharp.gatsbyImageData.images.fallback.src;
      var filepath = /[^/]*$/.exec(src)[0];
      return filepath === val.image;
    });
    const image = result[0].node.childImageSharp.gatsbyImageData;
    return (
      <Grid item xs={10} sm={6} md={3} xl={2} key={i} sx={{ p: 2 }}>
        <TeamCard name={val.name} img={image} description="Faculty" />
      </Grid>
    );
  });

  return (
    <Box sx={{ my: 4 }}>
      <Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h5"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Faculty&nbsp;
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Coordinators.
          </Typography>
        </Box>
        <Grid container justifyContent={"center"}>
          {faculty}
        </Grid>
      </Box>
      <Box display={{ sm: "flex" }} justifyContent={"space-between"}>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h5"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Student&nbsp;
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Coordinators.
          </Typography>
        </Box>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Year</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={year}
            label="Year"
            onChange={handleChange}
          >
            {Object.keys(jsondata.team)
              .reverse()
              .map(val => (
                <MenuItem value={val} key={val}>
                  {val}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Grid container justifyContent={"center"}>
        {jsondata.team[year].map((member, i) => {
          const result = nodes.filter(item => {
            const src =
              item.node.childImageSharp.gatsbyImageData.images.fallback.src;
            var filepath = /[^/]*$/.exec(src)[0];
            return filepath === member.image;
          });
          const image = result[0].node.childImageSharp.gatsbyImageData;
          return (
            <Grid item xs={10} sm={6} md={3} xl={2} key={i} sx={{ p: 2 }}>
              <TeamCard
                name={member.name}
                img={image}
                description="Team"
                twitter={member.twitter}
                github={member.github}
                linkedin={member.linkedin}
                website={member.website}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
