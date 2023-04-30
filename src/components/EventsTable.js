import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
  TablePagination,
  TextField,
  TableFooter
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { visuallyHidden } from "@mui/utils";

import { Link, graphql, useStaticQuery } from "gatsby";

export default function EventsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("Date");
  const header = ["Name", "Date", "Type", "Status"];
  const data = useStaticQuery(graphql`
    query Events {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            date
            slug
            title
            type
            markdownType
          }
        }
      }
    }
  `);

  const events = data.allMarkdownRemark.nodes
    .map(event => {
      const givendate = new Date(event.frontmatter.date);
      const today = new Date();
      const options = { year: "numeric", month: "short", day: "numeric" };

      return {
        id: event.id,
        name: event.frontmatter.title,
        date: new Date(event.frontmatter.date).toLocaleDateString(
          "en-US",
          options
        ),
        type: event.frontmatter.type,
        status:
          givendate === event.today
            ? "Today"
            : today > givendate
            ? "Past Event"
            : "Upcoming Event",
        slug: event.frontmatter.slug,
        markdown_type: event.frontmatter.markdownType
      };
    })
    .filter(event => event.markdown_type === "event");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - events.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createSortHandler = property => event => {
    setOrderBy(property);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  function getSortedEvents(events) {
    return events.sort((x, y) => {
      const a = x[orderBy.toLowerCase()];
      const b = y[orderBy.toLowerCase()];
      if (orderBy === "Date") {
        const ad = new Date(a);
        const bd = new Date(b);
        console.log("ehyy", a, b);
        if (ad > bd) return order === "asc" ? -1 : 1;
        else if (ad < bd) return order === "asc" ? 1 : -1;
        return 0;
      }
      if (a > b) return order === "asc" ? -1 : 1;
      else if (a < b) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  return (
    <Box sx={{ my: 4 }}>
      <Box
        display={{ sm: "flex" }}
        sx={{ pb: 2 }}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" color="primary">
          Directory of events
        </Typography>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="event table">
          <TableHead>
            <TableRow>
              {header.map((val, i) => (
                <TableCell
                  key={i}
                  align={
                    ["Date", "Type", "Status"].includes(val) ? "right" : "left"
                  }
                  onClick={createSortHandler(val)}
                  sortDirection={orderBy === val ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === val}
                    direction={orderBy === val ? order : "asc"}
                  >
                    {val}
                    {orderBy === val ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell align="right">See More</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? getSortedEvents(events).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : getSortedEvents(events)
            ).map(
              event =>
                event.name.toLowerCase().includes(search) && (
                  <TableRow
                    key={event.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 }
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {event.name}
                    </TableCell>
                    <TableCell align="right">{event.date}</TableCell>
                    <TableCell align="right">{event.type}</TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        color={
                          event.status === "Today"
                            ? blue[500]
                            : event.status.includes("Past")
                            ? "error"
                            : green["A700"]
                        }
                      >
                        {event.status}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Link to={`/events/${event.slug}`}>See more</Link>
                    </TableCell>
                  </TableRow>
                )
            )}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                colSpan={4}
                count={events.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
}
