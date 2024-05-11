import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function EventPage({ html, event_details }) {
  const options = { year: "numeric", month: "long", day: "numeric" };

  event_details.date = new Date(event_details.date).toLocaleDateString(
    "en-US",
    options
  );

  // console.log(getImage(event_details.image));

  return (
    <Container sx={{ boxShadow: 2, p: 2 }}>
      {event_details.image && (
        <GatsbyImage
          image={getImage(event_details.image)}
          alt={event_details.title}
          style={{ width: "100%", height: "300px" }}
        />
      )}
      <Box sx={{ py: 2 }}>
        <Typography
          variant="h4"
          color="black"
          fontWeight={"bold"}
          marginBottom={"10px"}
        >
          {event_details.title}
        </Typography>
        <div style={{ marginBottom: "10px" }}>
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Date:&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            {event_details.date}
          </Typography>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Time:&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            {event_details.time}
          </Typography>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}
          >
            Type:&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            {event_details.type}
          </Typography>
        </div>
        <Typography variant="body1" marginBottom={"10px"} textAlign={"justify"}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
        {(event_details.registration !== "NA" ||
          event_details.recording !== "NA") && (
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            marginBottom={"10px"}
          >
            Important Links
          </Typography>
        )}
        {event_details.registration !== "NA" && (
          <Button
            variant="contained"
            color="info"
            size="small"
            style={{ textTransform: "none", marginRight: "10px" }}
            href={event_details.registration}
            target="_blank"
          >
            Registration Form
          </Button>
        )}
        {event_details.recording !== "NA" && (
          <Button
            variant="contained"
            color="error"
            size="small"
            style={{ textTransform: "none", marginRight: "10px" }}
            href={event_details.recording}
            target="_blank"
          >
            Recording
          </Button>
        )}
      </Box>
    </Container>
  );
}
