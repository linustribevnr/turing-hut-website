import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

export default function TeamCard({
  name,
  img,
  description,
  twitter,
  github,
  linkedin,
  website
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {img && <GatsbyImage alt={name} image={img} />}
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box display={"flex"} justifyContent={"center"}>
        {twitter && (
          <Box sx={{ p: 1 }}>
            <a href={twitter} target="_blank" rel="noreferrer">
              <IconButton aria-label="twitter" size="small" mr={2}>
                <TwitterIcon fontSize="body1" />
              </IconButton>
            </a>
          </Box>
        )}
        {github && (
          <Box sx={{ p: 1 }}>
            <a href={github} target="_blank" rel="noreferrer">
              <IconButton aria-label="github" size="small" mr={2}>
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            </a>
          </Box>
        )}
        {linkedin && (
          <Box sx={{ p: 1 }}>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <IconButton aria-label="linkedin" size="small" mr={2}>
                <LinkedInIcon fontSize="body1" />
              </IconButton>
            </a>
          </Box>
        )}
        <Box sx={{ p: 1 }}>
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              <IconButton aria-label="link" size="small">
                <LinkIcon fontSize="inherit" />
              </IconButton>
            </a>
          )}
        </Box>
      </Box>
    </Card>
  );
}
