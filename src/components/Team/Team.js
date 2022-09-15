import React from "react";
import Container from "@mui/material/Container";
import data from "../../assets/team-data.json";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UserCard from "./UserCard";

export default function Team() {
  const [year, setYear] = React.useState(Object.keys(data.team).reverse()[0]);
  const handleChange = event => {
    setYear(event.target.value);
  };

  const faculty = data["faculty"].map((val, i) => {
    return (
      <Grid item xs={6} sm={4} md={3} xl={2} key={i}>
        <UserCard name={val.name} img={val.image} description="Faculty" />
      </Grid>
    );
  });
  return (
    <Container>
      <Typography variant="h4" style={{ display: "flex" }} mb={1}>
        <Typography variant="h4" color="primary" mr={1}>
          Our
        </Typography>
        Team
      </Typography>
      <Typography variant="body1" mb={2}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography variant="body1" mb={3}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Box>
        <Typography variant="h6" mb={1}>
          Faculty
        </Typography>
        <Grid
          container
          rowSpacing={{ xl: 2, xs: 1 }}
          columnSpacing={{ xl: 2, xs: 1 }}>
          {faculty}
        </Grid>
      </Box>
      <Box>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" mt={2} mb={1}>
            Members ({year})
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Year</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={year}
              label="Year"
              onChange={handleChange}>
              {Object.keys(data.team)
                .reverse()
                .map(val => (
                  <MenuItem value={val} key={val}>
                    {val}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <Grid
          container
          rowSpacing={{ xl: 2, xs: 1 }}
          columnSpacing={{ xl: 2, xs: 1 }}>
          {data.team[year].map((member, i) => (
            <Grid item xs={6} sm={4} md={3} xl={2} key={i}>
              <UserCard
                name={member.name}
                img={member.image}
                description="Team"
                twitter={member.twitter}
                github={member.github}
                linkedin={member.linkedin}
                website={member.website}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
