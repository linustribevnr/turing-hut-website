import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Container
} from "@mui/material";

// Import timeline data
import timelineDataFile from "../lib/icpc-timeline-data.json";

// Import existing ICPC images
import icpc2018 from "../assets/images/icpc/2018.jpg";
import icpc2019 from "../assets/images/icpc/2019.jpg";
import icpc2021 from "../assets/images/icpc/2021.jpg";
import icpc2022 from "../assets/images/icpc/2022.jpg";
import strawhatzChennai2024 from "../assets/images/icpc/2024-strawhatz-chennai.png";
import wrongAngledTriangle2 from "../assets/images/icpc/wrong-angled-triangle2.jpeg";
import wrongAngledTriangle3 from "../assets/images/icpc/wrong-angled-triangle3.jpeg";
import strawhatz2 from "../assets/images/icpc/strawhatz2.jpeg";
import unprofessionalCoders from "../assets/images/icpc/2023-unprofessional-coders.jpeg";
import wrongAngledTriangle from "../assets/images/icpc/wrong-angled-triangle.jpeg";

// Image mapping for reliable access
const images = {
  "2018.jpg": icpc2018,
  "2019.jpg": icpc2019,
  "2021.jpg": icpc2021,
  "2022.jpg": icpc2022,
  "2024-strawhatz-chennai.png": strawhatzChennai2024,
  "wrong-angled-triangle2.jpeg": wrongAngledTriangle2,
  "wrong-angled-triangle3.jpeg": wrongAngledTriangle3,
  "strawhatz2.jpeg": strawhatz2,
  "2023-unprofessional-coders.jpeg": unprofessionalCoders,
  "wrong-angled-triangle.jpeg": wrongAngledTriangle
  };

// Get data from imported file
const { aboutICPC, timeline: icpcTimelineData } = timelineDataFile;


// Timeline Item Component
const TimelineItem = ({ year, entries, isLast = false }) => {
  return (
    <Box sx={{ display: "flex", mb: { xs: 4, md: 8 }, position: "relative" }}>
      {/* Timeline Point and Line */}
      <Box sx={{ 
        display: { xs: "none", md: "flex" }, 
        flexDirection: "column", 
        alignItems: "center", 
        mr: 4,
        minWidth: "60px"
      }}>
        {/* Point */}
        <Box 
          sx={{ 
            width: 20, 
            height: 20, 
            borderRadius: "50%", 
            bgcolor: "primary.main",
            border: "3px solid white",
            boxShadow: "0 0 0 3px rgba(0,0,0,0.1)",
            mb: 2,
            flexShrink: 0,
            mt: 1
          }} 
        />
        {/* Line */}
        {!isLast && (
          <Box 
            sx={{ 
              width: "2px", 
              flexGrow: 1, 
              bgcolor: "grey.300",
              minHeight: "100px"
            }} 
          />
        )}
      </Box>

      {/* Content */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Year Header */}
        <Typography 
          variant="h4" 
          fontWeight="bold"
          sx={{ 
            mb: 4, 
            fontSize: { xs: "1.5rem", md: "2rem" },
            position: "relative"
          }}
        >
          {year}
          <Box sx={{ 
            display: { xs: "block", md: "none" },
            width: "40px",
            height: "3px",
            bgcolor: "primary.main",
            mt: 1
          }} />
        </Typography>

        {/* Teams in this year - Responsive Layout */}
        <Box sx={{ 
          display: "flex",
          flexDirection: "column",
          gap: { xs: 3, md: 4 }
        }}>
          {entries.map((entry, index) => (
            <Card 
              key={entry.id}
              sx={{ 
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                maxWidth: "800px",
                mx: "auto",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
                }
              }}
            >
              {/* Image Container */}
              {entry.imagePath && images[entry.imagePath] && (
                <Box sx={{ 
                  position: "relative",
                  width: { xs: "100%", sm: "280px" },
                  height: { xs: 200, sm: "auto" },
                  minHeight: { sm: 180 },
                  overflow: "hidden",
                  bgcolor: "grey.50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <CardMedia
                    component="img"
                    sx={{ 
                      maxWidth: "100%", 
                      maxHeight: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      objectPosition: "center"
                    }}
                    image={images[entry.imagePath]}
                    alt={`${entry.team} - ${entry.event}`}
                  />
                </Box>
              )}

              {/* Content */}
              <CardContent sx={{ 
                flex: 1, 
                p: { xs: 2, md: 3 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minWidth: 0 // Prevents flex item from overflowing
              }}>
                {/* Event Title */}
                <Typography 
                  variant="h6" 
                  fontWeight="bold"
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                    lineHeight: 1.3
                  }}
                >
                  {entry.event}
                </Typography>
                
                {/* Team Info Box */}
                <Box sx={{ 
                  p: { xs: 1.5, md: 2 }, 
                  bgcolor: "grey.50", 
                  borderRadius: 2, 
                  mb: 2,
                  border: "1px solid rgba(0,0,0,0.05)"
                }}>
                  <Typography 
                    variant="subtitle2" 
                    fontWeight="600"
                    sx={{ mb: 1, fontSize: { xs: "0.85rem", md: "0.9rem" } }}
                  >
                    Team: {entry.team}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", md: "0.85rem" }, 
                      lineHeight: 1.4,
                      wordBreak: "break-word"
                    }}
                  >
                    {Array.isArray(entry.members) ? entry.members.join(" • ") : entry.members}
                  </Typography>
                </Box>

                {/* Rank Badge */}
                {entry.rank && entry.rank !== "Qualified" && (
                  <Box sx={{ 
                    display: "inline-flex",
                    alignItems: "center",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    mb: 2,
                    alignSelf: "flex-start",
                    fontSize: "0.85rem",
                    fontWeight: "600"
                  }}>
                    🏆 {entry.rank}
                  </Box>
                )}

                {/* Description */}
                <Typography 
                  variant="body2" 
                  color="text.primary"
                  sx={{ 
                    lineHeight: 1.6,
                    flex: 1,
                    fontSize: "0.9rem"
                  }}
                >
                  {entry.description}
                </Typography>

                {/* LinkedIn Link */}
                {entry.linkedinPost && (
                  <Box sx={{ mt: 2, pt: 2, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                    <Typography 
                      variant="body2" 
                      color="primary"
                      component="a"
                      href={entry.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        "&:hover": { textDecoration: "underline" }
                      }}
                    >
                      📎 View LinkedIn Post →
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default function ICPC() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* About ICPC Section - Embedded in page */}
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          color="primary" 
          fontWeight="bold"
          sx={{ textAlign: "center", mb: 4 }}
        >
          🏆 About ICPC
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          {aboutICPC.description.map((desc, index) => (
            <Typography
              key={index}
              variant="body1"
              color="text.primary"
              sx={{ mb: 2, lineHeight: 1.7, textAlign: "justify" }}
            >
              {desc}
            </Typography>
          ))}
        </Box>

        <Divider sx={{ bgcolor: "primary.main", height: 2, mb: 6 }} />
      </Box>

      {/* Timeline Header */}
      <Typography 
        variant="h4" 
        color="primary" 
        fontWeight="bold"
        sx={{ textAlign: "center", mb: 6 }}
      >
        ICPC Journey Timeline
      </Typography>

      {/* Timeline */}
      <Box sx={{ maxWidth: "900px", mx: "auto" }}>
        {icpcTimelineData.map((timelineItem, index) => (
          <TimelineItem
            key={timelineItem.year}
            year={timelineItem.year}
            entries={timelineItem.entries}
            isLast={index === icpcTimelineData.length - 1}
          />
        ))}
      </Box>
    </Container>
  );
}