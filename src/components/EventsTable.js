import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TextField
} from "@mui/material";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function EventsTable() {
  const data = useStaticQuery(graphql`
    query Events {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            date(formatString: "DD-MM-YYYY")
            slug
            title
            type
          }
        }
      }
    }
  `);

  const events = data.allMarkdownRemark.nodes.map(event => {
    return {
      id: event.id,
      name: event.frontmatter.title,
      date: event.frontmatter.date,
      type: event.frontmatter.type,
      slug: event.frontmatter.slug
    };
  });
  const [search, setSearch] = useState("");

  return (
    <Box sx={{ my: 4 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <div>
          <Typography variant="h6" color="primary">
            Directory of past events
          </Typography>
        </div>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event name</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">See More</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map(
              event =>
                event.name.toLowerCase().includes(search) && (
                  <TableRow
                    key={event.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {event.name}
                    </TableCell>
                    <TableCell align="right">{event.date}</TableCell>
                    <TableCell align="right">{event.type}</TableCell>
                    <TableCell align="right">
                      <Link to={`/events/${event.slug}`}>See more</Link>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
