import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeIcon from "@mui/icons-material/Code";
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
  website,
  cpprofile
}) {
  return (
    <Card
      sx={{
        maxWidth: 360,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6
        }
      }}
    >
      {img && (
        <Box
          sx={{
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            overflow: "hidden"
          }}
        >
          <GatsbyImage alt={name} image={img} />
        </Box>
      )}
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" gap={1} pb={2}>
        {twitter && (
          <IconButton
            component="a"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            sx={iconStyle}
          >
            <XIcon />
          </IconButton>
        )}
        {github && (
          <IconButton
            component="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...iconStyle, color: "#262626" }}
          >
            <GitHubIcon />
          </IconButton>
        )}
        {linkedin && (
          <IconButton
            component="a"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...iconStyle, color: "#0A66C2" }}
          >
            <LinkedInIcon />
          </IconButton>
        )}
        {website && (
          <IconButton
            component="a"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...iconStyle, color: "#595959" }}
          >
            <LanguageIcon />
          </IconButton>
        )}
        {cpprofile && (
          <IconButton
            component="a"
            href={cpprofile}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...iconStyle, color: "#262626" }}
          >
            <CodeIcon />
          </IconButton>
        )}
      </Box>
    </Card>
  );
}

const iconStyle = {
  transition: "background 0.2s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)"
  }
};
