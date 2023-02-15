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
  TableFooter,
  Card,
  CardContent
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
          }
        }
      }
    }
  `);

  const events = data.allMarkdownRemark.nodes.map(event => {
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
      slug: event.frontmatter.slug
    };
  });

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

      {
        window.innerWidth > 810 ?
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
                          <Link to={`/events/${event.slug}`}>
                            See more
                          </Link>
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
          </TableContainer> :

          <div>
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              Sort by:
            </Typography>

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

            {(rowsPerPage > 0
              ? getSortedEvents(events).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
              : getSortedEvents(events)
            ).map(
              event =>
                event.name.toLowerCase().includes(search) && (
                  <>
                    <Card variant="outlined" sx={{ boxShadow: 3 }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                          {event.date}
                        </Typography>
                        <Typography variant="h5" component="div">
                          {event.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Event Type: {event.type}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ mb: 1.5 }}
                          color={
                            event.status === "Today"
                              ? blue[500]
                              : event.status.includes("Past")
                                ? "error"
                                : green["A700"]
                          }
                        >
                          Event Status: {event.status}
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>

                          <Typography sx={{ mr: 1.5 }}>See more:</Typography>

                          <Link to={`/events/${event.slug}`}>
                            <svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 650">
                              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
                            </svg>
                          </Link>
                        </Box>

                      </CardContent>
                    </Card>
                    <br />
                  </>
                )
            )}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </div>

      }

    </Box>
  );
}
