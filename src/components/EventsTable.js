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
import { visuallyHidden } from "@mui/utils";

import { Link, graphql, useStaticQuery } from "gatsby";

export default function EventsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const header = ["Name", "Date", "Type"];
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
    if (orderBy === "")
      return events.sort((a, b) => {
        if (a.status > b.status) return -1;
        else return 1;
      });
    return events.sort((x, y) => {
      const a = x[orderBy.toLowerCase()];
      const b = y[orderBy.toLowerCase()];
      if (a > b) return order === "asc" ? -1 : 1;
      else if (a < b) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  return (
    <Box sx={{ my: 4 }}>
      <Box display={{ sm: "flex" }} justifyContent={"space-between"}>
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
                  sortDirection={orderBy === val ? order : false}>
                  <TableSortLabel
                    active={orderBy === val}
                    direction={orderBy === val ? order : "asc"}>
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
                    }}>
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
                colSpan={3}
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
