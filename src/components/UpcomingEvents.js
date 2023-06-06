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
                  borderRadius: "8px"
                }}
              >
                <Card
                  style={{
                    backgroundColor: "#f4f4f5"
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {event.frontmatter.date}
                    </Typography>
                    <Typography variant="h6">
                      {event.frontmatter.title}
                    </Typography>
                    <Typography variant="body2">
                      {event.frontmatter.type}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={
                        `${event.frontmatter.slug}`.includes("turing-cup-2023")
                          ? "/turingcup"
                          : `/events/${event.frontmatter.slug}`
                      }
                      style={{ textDecoration: "none" }}
                    >
                      <Button sx={{ textTransform: "none" }}>Learn More</Button>
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
