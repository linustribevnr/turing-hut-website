import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function UpcomingEvents() {
  const data = useStaticQuery(graphql`
    query UpcomingEventsQuery {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            date
            slug
            title
            type
            time
          }
        }
      }
    }
  `);

  var events = data.allMarkdownRemark.nodes;
  const today = new Date();
  var options = { year: "numeric", month: "long", day: "numeric" };

  events = events.filter(e => new Date(e.frontmatter.date) >= today);
  events.sort(
    (a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
  );
  events.map(
    e =>
      (e.frontmatter.date = new Date(e.frontmatter.date).toLocaleDateString(
        "en-US",
        options
      ))
  );

  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ my: 2, textAlign: "center" }}>
        <Typography
          variant="h5"
          color="black"
          fontWeight={"bold"}
          sx={{ display: "inline" }}
        >
          Upcoming&nbsp;
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          fontWeight={"bold"}
          sx={{ display: "inline" }}
        >
          Events.
        </Typography>
      </Box>
      <Typography variant="body1" color="initial" align="center">
        Future events ordered chronologically. View all past events&nbsp;
        <Link to="/events" style={{ color: "primary" }}>
          here
        </Link>
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ my: 2, display: "flex", justifyContent: "space-around" }}
      >
        {events.length > 0 ? (
          events.map(event => (
            <Grid item xs={12} md={3} key={event.id}>
              <div
                style={{
                  boxShadow: "0 0 36px rgb(0 0 0 / 15%)",
                  borderRadius: "8px",
                  position: "relative"
                }}
              >
                <Card
                  sx={{
                    padding: "10px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)" },
                    backgroundColor: "#f4f4f5",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Transparent Watermark Icon */}
                  <EmojiEventsIcon
                    sx={{
                      color: "#fa9d01",
                      position: "absolute",
                      top: "50%",
                      right: "0px",
                      fontSize: "80px",
                      opacity: 0.45,
                      transform: "translateY(-50%)"
                    }}
                  />

                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <Typography variant="body2" color="#ff1a1a" gutterBottom>
                        {event.frontmatter.date}
                      </Typography>
                      <AccessTimeIcon
                        sx={{ color: "#ff1a1a", fontSize: 18, ml: 0.5 }}
                      />
                    </Box>
                    <Typography variant="h6" color="#00452F" fontWeight="bold">
                      {event.frontmatter.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.frontmatter.type}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={
                        event.frontmatter.slug.includes("turing-cup-2023")
                          ? "/turingcup"
                          : `/events/${event.frontmatter.slug}`
                      }
                      style={{ textDecoration: "none", width: "100%" }}
                    >
                      <Button
                        fullWidth
                        sx={{
                          textTransform: "none",
                          backgroundColor: "#16654F",
                          marginTop: "10px",
                          color: "white",
                          "&:hover": { backgroundColor: "#00452F" }
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))
        ) : (
          <Box sx={{ mx: "auto" }}>
            <Typography variant="body1" color="secondary">
              Exciting Events coming soon!
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
}
