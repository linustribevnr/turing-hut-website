import React, { useEffect, useState } from "react";
import { Box, Divider, Typography, Tooltip, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const socialMediaItems = [
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/linustribevnr"
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/channel/UCBJz-RDa3d4rTLycV_MhTPA"
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://instagram.com/turing.hut"
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/turinghut"
  }
];

export default function Footer() {
  const [bgcol, setbgcol] = useState("white");
  useEffect(() => {
    // console.log(window.location.pathname);

    if (
      window.location.pathname.includes("/turingcup") ||
      window.location.pathname.includes("/turingcup/") ||
      window.location.pathname.includes("/register")
    ) {
      setbgcol("#101820FF");
    } else setbgcol("white");
    // console.log(bgcol);
  });

  return (
    <Box sx={{ my: 2, bgcolor: `${bgcol}` }}>
      <Divider />
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={9}
          sx={{ my: 2, textAlign: { xs: "center", md: "left" } }}
        >
          <Typography
            variant="body2"
            component="div"
            sx={{ flexGrow: 1, color: "#757575" }}
          >
            “The most damaging phrase in the language is.. it's always been done
            this way” - Grace Hopper
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ my: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            {socialMediaItems.map(item => (
              <a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#757575",
                  padding: "10px"
                }}
              >
                <Tooltip title={item.name} placement="top">
                  {item.icon}
                </Tooltip>
              </a>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
