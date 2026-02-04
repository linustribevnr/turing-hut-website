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
import rightangledtriangleAmritapuri2025 from "../assets/images/icpc/rightangledtriangleAmritapuri2025.jpeg";
import ackermansAmritapuri2025 from "../assets/images/icpc/ackermansAmritapuri2025.jpeg";
import delta2025 from "../assets/images/icpc/delta2025.jpeg";
import ratChennai2025 from "../assets/images/icpc/ratChennai2025.jpeg";
import dontsleep from "../assets/images/icpc/dontsleep.jpeg";
import bleh from "../assets/images/icpc/bleh.jpeg";

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
  "wrong-angled-triangle.jpeg": wrongAngledTriangle,
  "rightangledtriangleAmritapuri2025.jpeg": rightangledtriangleAmritapuri2025,
  "ackermansAmritapuri2025.jpeg": ackermansAmritapuri2025,
  "delta2025.jpeg": delta2025,
  "ratChennai2025.jpeg": ratChennai2025,
  "dontsleep.jpeg": dontsleep,
  "bleh.jpeg": bleh
};

// Get data from imported file
const { aboutICPC, timeline: icpcTimelineData } = timelineDataFile;

// Timeline Item Component
const TimelineItem = ({ year, entries, isLast = false }) => {
  return (
    <Box sx={{ display: "flex", mb: { xs: 4, md: 8 }, position: "relative" }}>
      {/* Timeline Point and Line */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          mr: 4,
          minWidth: "60px"
        }}
      >
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
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              width: "40px",
              height: "3px",
              bgcolor: "primary.main",
              mt: 1
            }}
          />
        </Typography>

        {/* Teams in this year - Responsive Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 4 }
          }}
        >
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
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", sm: "280px" },
                    height: { xs: 200, sm: "auto" },
                    minHeight: { sm: 180 },
                    overflow: "hidden",
                    bgcolor: "grey.50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
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
              <CardContent
                sx={{
                  flex: 1,
                  p: { xs: 2, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minWidth: 0 // Prevents flex item from overflowing
                }}
              >
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
                <Box
                  sx={{
                    p: { xs: 1.5, md: 2 },
                    bgcolor: "grey.50",
                    borderRadius: 2,
                    mb: 2,
                    border: "1px solid rgba(0,0,0,0.05)"
                  }}
                >
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
                    {Array.isArray(entry.members)
                      ? entry.members.join(" • ")
                      : entry.members}
                  </Typography>
                </Box>

                {/* Rank Badge */}
                {entry.rank && entry.rank !== "Qualified" && (
                  <Box
                    sx={{
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
                    }}
                  >
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
                  <Box
                    sx={{
                      mt: 2,
                      pt: 2,
                      borderTop: "1px solid rgba(0,0,0,0.05)"
                    }}
                  >
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
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center"
          }}
        >
          <Typography
            variant="h4"
            color="secondary"
            fontWeight={"bold"}
            sx={{ display: "inline", textAlign: "center", mb: 4 }}
          >
            About &nbsp;
          </Typography>
          <Typography
            variant="h4"
            color="primary"
            fontWeight={"bold"}
            sx={{ display: "inline", textAlign: "center", mb: 4 }}
          >
            ICPC
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mb: 2, lineHeight: 1.7, textAlign: "justify" }}
          >
            The International Collegiate Programming Contest (ICPC) is the world’s oldest and most 
            prestigious programming competition, representing the ultimate stage for students passionate 
            about coding and problem-solving. Often referred to as the Olympics of Competitive Programming, 
            ICPC fosters creativity, teamwork, and resilience—skills that have a lasting impact on both 
            everyday life and professional careers.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mb: 4, lineHeight: 1.7, textAlign: "justify" }}
          >
            Each year, only a select number of teams qualify to compete at the regional level, which is 
            conducted nationally. In this context, Turing Hut takes pride in consistently securing
             qualification for the regionals every year since 2017.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mb: 4, lineHeight: 1.7, textAlign: "justify" }}
          >
            With the establishment of Turing Hut in 2017, the competitive programming culture at 
            VNRVJIET began to grow rapidly, and in the very same year, two teams from VNRVJIET qualified 
            for the ICPC Regionals.

          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mb: 4, lineHeight: 1.7, textAlign: "justify" }}
          >
            The best performance by a VNRVJIET team at the ICPC Regionals was an 
            <strong> All India Rank 42 </strong> achieved in 2023 by team 
            <strong> Wrong Angled Triangle </strong>
            at the <strong>ICPC Asia West Amritapuri Regionals 2023 </strong>, narrowly missing 
            qualification for the Asia West Continent Finals by just four ranks, with the last qualifying 
            team placed at Rank 38.
          </Typography>

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ mb: 4, lineHeight: 1.7, textAlign: "justify" }}
          >
            The best rank ever achieved by a VNRVJIET team in the ICPC Prelims
             was an <strong>All India Rank 24</strong> among nearly 3,000 teams, secured by 
             team <strong>Right Angled Triangle</strong> in 2025. The team further achieved an 
             <strong> All India Rank 62</strong> at the <strong>ICPC Asia West Amritapuri Regionals 2025</strong>,
              narrowly missing qualification for the Asia West Continentals, 
              where the final qualifying position stood at Rank 49.
          </Typography>
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
      <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
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
