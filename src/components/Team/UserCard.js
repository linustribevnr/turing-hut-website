import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";

export default function UserCard({
  name,
  img,
  description,
  github,
  linkedin,
  website
}) {
  const content_center = { display: "flex", justifyContent: "center" };
  return (
    <Card
      variant="outlined"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "15px 10px",
        flexDirection: "column",
        height: "210px"
      }}>
      <div style={content_center}>
        <Avatar alt="Remy Sharp" src={img} sx={{ width: 100, height: 100 }} />
      </div>
      <Typography
        variant="h6"
        mt={1}
        style={{ textAlign: "center", fontSize: "17px" }}>
        {name}
      </Typography>
      <Typography variant="caption" style={content_center}>
        {description}
      </Typography>
      <div style={{ ...content_center, margin: "5px 0 20px 0" }}>
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <IconButton aria-label="github" size="small" mr={2}>
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer">
            <IconButton aria-label="linkedin" size="small" mr={2}>
              <LinkedInIcon fontSize="inherit" />
            </IconButton>
          </a>
        )}
        {website && (
          <a href={website} target="_blank" rel="noreferrer">
            <IconButton aria-label="link" size="small">
              <LinkIcon fontSize="inherit" />
            </IconButton>
          </a>
        )}
      </div>
    </Card>
  );
}
