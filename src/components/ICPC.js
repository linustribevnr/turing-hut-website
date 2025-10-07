import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  Divider
} from "@mui/material";
import ICPCImage from "./ICPCImage";
import icpcData from "../lib/icpc-data.json";

export default function ICPC() {
  const { header, achievements, about } = icpcData;
  const [activeYear, setActiveYear] = useState("2023");
  const sectionRefs = useRef({});
  
  // Get unique years and sort them
  const years = [...new Set(achievements.map(a => a.year))].sort((a, b) => parseInt(b) - parseInt(a));
  
  // Group achievements by year
  const achievementsByYear = years.reduce((acc, year) => {
    acc[year] = achievements.filter(a => a.year === year);
    return acc;
  }, {});

  useEffect(() => {
    const handleScroll = () => {
      // Find which year section is currently in view
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      for (const year of years) {
        const element = sectionRefs.current[year];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop;
          const elementBottom = elementTop + rect.height;
          
          if (scrollTop + windowHeight / 2 >= elementTop && scrollTop + windowHeight / 2 <= elementBottom) {
            setActiveYear(year);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [years]);

  const scrollToYear = (year) => {
    const element = sectionRefs.current[year];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  
  return (
    <Box sx={{ position: "relative" }}>
      {/* Timeline Sidebar */}
      <Box sx={{
        position: "fixed",
        left: { xs: 10, md: 20 },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1000,
        display: { xs: "none", md: "block" }
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {/* Timeline Line */}
          <Box sx={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            bgcolor: "primary.main",
            transform: "translateX(-50%)"
          }} />
          
          {/* Year Nodes */}
          {years.map((year, index) => (
            <Box
              key={year}
              onClick={() => scrollToYear(year)}
              sx={{
                position: "relative",
                mb: 4,
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              {/* Node Circle */}
              <Box sx={{
                width: activeYear === year ? 20 : 16,
                height: activeYear === year ? 20 : 16,
                borderRadius: "50%",
                bgcolor: activeYear === year ? "primary.main" : "grey.400",
                border: "3px solid white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                transform: activeYear === year ? "scale(1.2)" : "scale(1)"
              }} />
              
              {/* Year Label */}
              <Typography
                variant="body2"
                sx={{
                  position: "absolute",
                  left: 35,
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontWeight: activeYear === year ? "bold" : "normal",
                  color: activeYear === year ? "primary.main" : "text.secondary",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  fontSize: activeYear === year ? "0.9rem" : "0.8rem"
                }}
              >
                {year}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 4, ml: { md: 8 } }}>
        {/* Header Section */}
        <Grid container justifyContent="center" sx={{ mb: 6 }}>
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                <Typography
                  variant="h4"
                  sx={{ fontSize: "2rem", mr: 2 }}
                >
                  {header.emoji}
                </Typography>
                <Box>
                  <Typography
                    variant="h4"
                    color="secondary"
                    fontWeight="bold"
                    sx={{ display: "inline" }}
                  >
                    ICPC&nbsp;
                  </Typography>
                  <Typography
                    variant="h4"
                    color="primary"
                    fontWeight="bold"
                    sx={{ display: "inline" }}
                  >
                    Legacy
                  </Typography>
                </Box>
              </Box>
              
              <Divider sx={{ my: 3, bgcolor: "primary.main", height: 2, mx: "auto", width: "60%" }} />
              
              {header.description.map((desc, index) => (
                <Typography 
                  key={index}
                  variant="body1" 
                  color="secondary" 
                  sx={{ my: 2, textAlign: "justify", lineHeight: 1.7 }}
                >
                  {desc}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Achievements Timeline */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              sx={{ display: "inline-flex", alignItems: "center" }}
            >
              <span style={{ fontSize: "1.5rem", marginRight: "12px" }}>🏅</span>
              Achievements Timeline
            </Typography>
          </Box>

          {/* Year Sections */}
          {years.map((year) => (
            <Box
              key={year}
              ref={el => sectionRefs.current[year] = el}
              sx={{
                mb: 8,
                opacity: activeYear === year ? 1 : 0.3,
                filter: activeYear === year ? "blur(0px)" : "blur(2px)",
                transition: "all 0.5s ease-in-out",
                transform: activeYear === year ? "scale(1)" : "scale(0.95)"
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                sx={{ textAlign: "center", mb: 4 }}
              >
                {year}
              </Typography>
              
              <Grid container spacing={3} justifyContent="center" sx={{ mx: "auto", maxWidth: "1400px" }}>
                {achievementsByYear[year].map((achievement, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={achievement.id}>
                      <Card 
                        sx={{ 
                          height: "350px",
                          display: "flex",
                          flexDirection: "column",
                          transition: "all 0.3s ease-in-out",
                          borderRadius: 2,
                          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                          overflow: "hidden",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 12px 32px rgba(22, 101, 79, 0.2)"
                          }
                        }}
                      >
                        {/* Dynamic Achievement Image */}
                        <ICPCImage
                          imagePath={achievement.imagePath}
                          alt={achievement.title}
                          title={achievement.title}
                          description={achievement.description}
                        />
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          ))}
        </Box>

        {/* About ICPC Section */}
        <Box sx={{ mt: 8 }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10} lg={8}>
              <Card sx={{ 
                p: 4, 
                bgcolor: "rgba(22, 101, 79, 0.02)",
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
              }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "2rem", mr: 2 }}
                  >
                    {about.emoji}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    color="secondary"
                  >
                    {about.title}
                  </Typography>
                </Box>
                
                <Divider sx={{ mb: 3, bgcolor: "primary.main", height: 1 }} />
                
                {about.description.map((desc, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    color="secondary"
                    sx={{ textAlign: "justify", mb: 2, lineHeight: 1.7 }}
                  >
                    {desc}
                  </Typography>
                ))}
                
                <Box sx={{ 
                  p: 3, 
                  bgcolor: "rgba(22, 101, 79, 0.1)", 
                  borderRadius: 2,
                  borderLeft: "6px solid",
                  borderColor: "primary.main",
                  my: 3
                }}>
                  <Typography 
                    variant="body1" 
                    color="primary" 
                    fontStyle="italic"
                    fontWeight="medium"
                    sx={{ textAlign: "center", lineHeight: 1.6 }}
                  >
                    {about.quote}
                  </Typography>
                </Box>

                <Box sx={{ 
                  p: 3, 
                  bgcolor: "rgba(76, 77, 79, 0.05)", 
                  borderRadius: 2,
                  textAlign: "center",
                  border: "1px solid rgba(22, 101, 79, 0.1)"
                }}>
                  <Typography 
                    variant="body1" 
                    color="secondary" 
                    sx={{ mb: 2, fontWeight: "medium" }}
                  >
                    {about.cta.text}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="primary"
                    component="a"
                    href={about.cta.url}
                    sx={{ 
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "1.05rem",
                      "&:hover": { 
                        textDecoration: "underline",
                        color: "primary.dark"
                      }
                    }}
                  >
                    {about.cta.linkText}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}