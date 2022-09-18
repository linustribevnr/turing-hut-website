import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

export default function EventPage({ html, event_details }) {
  return (
    <Container>
      {event_details.image && (
        <div
          style={{
            height: "320px",
            marginBottom: "10px",
            backgroundImage: `url(${event_details.image})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
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
        <div style={{ marginBottom: "10px" }}>
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            sx={{ display: "inline" }}>
            Time:&nbsp;
          </Typography>
          <Typography variant="body1" sx={{ display: "inline" }}>
            {event_details.time}
          </Typography>
        </div>
        <Typography variant="body1" marginBottom={"10px"}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Typography>
        {(event_details.contestlink === "NA" ||
          event_details.recording === "NA") && (
          <Typography
            variant="body1"
            color="black"
            fontWeight={"bold"}
            marginBottom={"10px"}>
            Important Links
          </Typography>
        )}
        {event_details.contestlink === "NA" && (
          <Button
            variant="outlined"
            color="success"
            size="small"
            style={{ textTransform: "none", marginRight: "10px" }}
            href={event_details.contestlink}>
            Contest
          </Button>
        )}
        {event_details.recording === "NA" && (
          <Button
            variant="outlined"
            color="error"
            size="small"
            style={{ textTransform: "none", marginRight: "10px" }}
            href={event_details.recording}>
            Recording
          </Button>
        )}
      </Box>
    </Container>
  );
}
