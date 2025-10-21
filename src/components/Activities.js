import React from "react";
import { Grid, Typography, Card } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CodeIcon from "@mui/icons-material/Code";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LaptopIcon from "@mui/icons-material/Laptop";

const iconStyle = {
  fontSize: "80px",
  color: "#0d3f32",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.15)"
  }
};

const activities = [
  {
    title: "Peer Learning",
    icon: <Diversity3Icon sx={iconStyle} />,
    body: "First and second-year students get a chance to learn advanced data structures and algorithms from their seniors."
  },
  {
    title: "Coding Competitions",
    icon: <CodeIcon sx={iconStyle} />,
    body: "Showcase your skills and compete with the best in college at the various contests we hold every year."
  },
  {
    title: "Speaker Sessions",
    icon: <QuestionAnswerIcon sx={iconStyle} />,
    body: "Be in the know of new opportunities in tech and beyond through our information sessions."
  },
  // {
  //   title: "Hands-on Workshops",
  //   icon: <LaptopIcon sx={iconStyle} />,
  //   body: "Attend a workshop to pick up new skills and work under the guidance of an instructor."
  // }
];

export default function Activities() {
  return (
    <Grid
      container
      sx={{
        mt: 1,
        p: 2,
        mx: "auto",
        display: "flex",
        flexWrap: "wrap" ,
        justifyContent: "center",
      }}
      spacing={4}
    >
      {activities.map(item => (
        <Grid item key={item.title} xs={12} sm={6} md={3}>
          <Card
            sx={{
              textAlign: "center",
              p: 3,
              borderRadius: "12px",
              border: "1px solid",
              borderColor: "grey.300",
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 4,
                bgcolor: "#e3f2fd",
              }
            }}
          >
            {item.icon}
            <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {item.body}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
