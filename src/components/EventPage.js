import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

export default function EventPage({ html, event_details }) {
  return (
    <Container>
      {event_details.image && (
        <div
          style={{
            height: "250px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "end",
            backgroundImage: `url(${event_details.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
      )}
      <Box>
        <Typography
          variant="h4"
          color="black"
          fontWeight={"bold"}
          marginBottom={"10px"}>
          {event_details.title}
        </Typography>
        <div style={{ marginBottom: "10px" }}>
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}>
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
            sx={{ display: "inline" }}>
            Type:&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            {event_details.type}
          </Typography>
        </div>
        <Typography variant="body1" marginBottom={"10px"}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
        {(event_details.contestlink || event_details.recording) && (
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            marginBottom={"10px"}>
            Important Links
          </Typography>
        )}
        {event_details.contestlink && (
          <Button
            variant="contained"
            color="success"
            href={event_details.contestlink}>
            Contest Link
          </Button>
        )}
        {event_details.recording && (
          <Button
            variant="contained"
            color="error"
            href={event_details.recording}>
            Recording Link
          </Button>
        )}
      </Box>
    </Container>
  );
}
