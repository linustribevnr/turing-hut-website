import React from "react";
import { Box, Typography } from "@mui/material";

// Direct image imports - more reliable with Gatsby
import icpc2018 from "../assets/images/icpc/2018.jpg";
import icpc2019 from "../assets/images/icpc/2019.jpg";
import icpc2021 from "../assets/images/icpc/2021.jpg";
import icpc2022 from "../assets/images/icpc/2022.jpg";
import codeFury2020 from "../assets/images/icpc/codefury-2020.jpg";
import codeKing2020 from "../assets/images/icpc/codeking-2020.jpg";
import codeLeague from "../assets/images/icpc/codeleague.jpg";
import ieeeThinkPad from "../assets/images/icpc/ieee-thinkpad.jpg";
import megathon2022 from "../assets/images/icpc/megathon-2022.jpg";
import wmn2023 from "../assets/images/icpc/wmn-2023.jpg";

// Image mapping for reliable access
const images = {
  "2018.jpg": icpc2018,
  "2019.jpg": icpc2019,
  "2021.jpg": icpc2021,
  "2022.jpg": icpc2022,
  "codefury-2020.jpg": codeFury2020,
  "codeking-2020.jpg": codeKing2020,
  "codeleague.jpg": codeLeague,
  "ieee-thinkpad.jpg": ieeeThinkPad,
  "megathon-2022.jpg": megathon2022,
  "wmn-2023.jpg": wmn2023
};

const ICPCImage = ({ imagePath, alt, title, description }) => {
  const imageSrc = images[imagePath];
  
  // Debug logging
  console.log('ICPCImage debug:', { imagePath, imageSrc, availableKeys: Object.keys(images) });
  
  if (!imageSrc) {
    console.warn(`Image not found: ${imagePath}. Available images:`, Object.keys(images));
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.200",
          borderRadius: "8px"
        }}
      >
        <Typography color="text.secondary">Image not found: {imagePath}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        cursor: "pointer",
        borderRadius: "8px",
        "&:hover .image": {
          transform: "scale(1.05)"
        },
        "&:hover .titleOverlay": {
          height: "100px",
          pb: 2
        },
        "&:hover .description": {
          opacity: 1,
          maxHeight: "100px"
        }
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt={alt}
        className="image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.4s ease-in-out",
          display: "block"
        }}
      />
      
      <Box
        className="titleOverlay"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent, rgba(0,0,0,0.85))",
          backdropFilter: "blur(4px)",
          height: "40px",
          py: 1,
          px: 2,
          transition: "all 0.4s ease-in-out",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            fontSize: "0.9rem",
            lineHeight: 1.2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {title}
        </Typography>
        
        <Typography
          className="description"
          variant="body2"
          sx={{
            color: "rgba(255,255,255,0.95)",
            textShadow: "0 1px 2px rgba(0,0,0,0.8)",
            fontSize: "0.8rem",
            lineHeight: 1.5,
            mt: 0,
            opacity: 0,
            maxHeight: 0,
            overflow: "hidden",
            transition: "all 0.4s ease-in-out"
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ICPCImage;