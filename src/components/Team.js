import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import jsondata from "../assets/team_data.json";
import TeamCard from "../components/TeamCard";

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

  const getImage = val => {
    const result = nodes.filter(item => {
      const src = item.node.childImageSharp.gatsbyImageData.images.fallback.src;
      var filepath = /[^/]*$/.exec(src)[0];
      return filepath === val.image;
    });
    return result.length > 0
      ? result[0].node.childImageSharp.gatsbyImageData
      : null;
  };

  const renderMembers = data => {
    return data.map((val, i) => (
      <Grid item xs={10} sm={6} md={3} xl={2} key={i} sx={{ p: 2 }}>
        <TeamCard
          name={val.name}
          img={getImage(val)}
          description={val.designation}
          twitter={val.twitter}
          github={val.github}
          linkedin={val.linkedin}
          website={val.website}
        />
      </Grid>
    ));
  };

  const faculty = renderMembers(jsondata["faculty"]);
  const founders = renderMembers(jsondata["founders"]);
  const students = renderMembers(jsondata.team[year]);

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
      <Box>
        <Box sx={{ my: 2 }}>
          <Typography
            variant="h5"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Founders&nbsp;
          </Typography>
        </Box>
        <Grid container justifyContent={"center"}>
          {founders}
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
        {students}
      </Grid>
    </Box>
  );
}
