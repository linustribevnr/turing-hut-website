import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const socialMediaItems = [
  {
    name: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/linustribevnr",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon />,
    link: "https://www.youtube.com/channel/UCBJz-RDa3d4rTLycV_MhTPA",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://instagram.com/turing.hut",
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/turinghut",
  },
];

export default function Footer() {
  const [bgcol, setbgcol] = useState("white");

  useEffect(() => {
    if (
      window.location.pathname.includes("/turingcup") ||
      window.location.pathname.includes("/turingcup/") ||
      window.location.pathname.includes("/register")
    ) {
      setbgcol("#101820FF");
    } else setbgcol("white");
  }, []);

  return (
    <Box sx={{ my: 2, bgcolor: bgcol }}>
      <Divider />
      <Box
        sx={{
          py: 3,
          px: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", md: "left" },
        }}
      >
      <Box>
        <Typography variant="body1" color="secondary" sx={{ p: 0.5 }}>
          Mail us at{" "}
          <a
            href="mailto:turinghut@vnrvjiet.in"
            style={{
              color: "inherit",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            turinghut@vnrvjiet.in
          </a>
        </Typography>
      </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 2, md: 0 },
          }}
        >
          {socialMediaItems.map((item) => (
            <Tooltip title={item.name} placement="top" key={item.name}>
              <IconButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                sx={{ color: "#757575", mx: 1 }}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}

          <Tooltip title="Contact Us" placement="top">
            <IconButton
              href="/contact"
              sx={{ color: "#757575", mx: 1 }}
            >
              <FmdGoodIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
}
