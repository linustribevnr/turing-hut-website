import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button
} from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LaptopIcon from "@mui/icons-material/Laptop";

const activities = [
  {
    title: "Peer Learning",
    icon: <Diversity3Icon style={{ fontSize: "100px" }} />,
    body: "First and second year students get a chance to learn advanced data structures and algorithms from their seniors."
  },
  {
    title: "Coding Competitions",
    icon: <CodeIcon style={{ fontSize: "100px" }} />,
    body: "Showcase your skills and compete with the best in college at the various contests we hold every year."
  },
  {
    title: "Speaker Sessions",
    icon: <QuestionAnswerIcon style={{ fontSize: "100px" }} />,
    body: "Be in the know of new opportunities in tech and beyond through our information sessions."
  },
  {
    title: "Hands-on Workshops",
    icon: <LaptopIcon style={{ fontSize: "100px" }} />,
    body: "Attend a workshop to pickup new skills and work under the guidance of an instructor."
  }
];

export default function Activities() {
  return (
    <Box sx={{ my: 4 }}>
      <Grid
        container
        sx={{
          my: 2,
          bgcolor: "#F5FFFA",
          border: "1px solid #16654f",
          borderRadius: "5px"
        }}
      >
        {activities.map(item => (
          <Grid
            item
            key={item.title}
            xs={12}
            sm={6}
            md={3}
            textAlign={"center"}
            sx={{ p: 2 }}
          >
            {item.icon}
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2">{item.body}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
