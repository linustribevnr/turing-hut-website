import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function UserCard({
  name,
  img,
  description,
  twitter,
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
        padding: "10px 5px",
        flexDirection: "column",
        height: "210px"
      }}>
      <div style={content_center}>
        <Avatar sx={{ width: 100, height: 100 }}>
          <GatsbyImage alt={name} image={img} />
        </Avatar>
      </div>
      <Typography
        variant="body1"
        mt={1}
        style={{ textAlign: "center", fontSize: "17px" }}>
        {name}
      </Typography>
      <Typography variant="caption" style={content_center}>
        {description}
      </Typography>
      <div style={{ ...content_center, margin: "5px 0 20px 0" }}>
        {twitter && (
          <a href={twitter} target="_blank" rel="noreferrer">
            <IconButton aria-label="twitter" size="small" mr={2}>
              <TwitterIcon fontSize="inherit" />
            </IconButton>
          </a>
        )}
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
