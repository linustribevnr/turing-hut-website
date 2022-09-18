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
  TextField
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { visuallyHidden } from "@mui/utils";

import { Link, graphql, useStaticQuery } from "gatsby";

export default function EventsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const header = ["Name", "Date", "Type", "Status"];
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
    const date = event.frontmatter.date.split("-");
    const formatedDate = new Date(date[2], date[1] - 1, date[0]);
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "-" + mm + "-" + yyyy;
    console.log(formattedToday, event.frontmatter.date);
    return {
      id: event.id,
      name: event.frontmatter.title,
      date: event.frontmatter.date,
      type: event.frontmatter.type,
      status:
        formattedToday === event.frontmatter.date
          ? "Today"
          : today - formatedDate > 0
          ? "Past Event"
          : "Upcoming Event",
      slug: event.frontmatter.slug
    };
  });
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <div>
          <Typography variant="h6" color="primary">
            Directory of events
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
            {getSortedEvents(events)
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map(
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
                        <Typography
                          variant="body2"
                          color={
                            event.status === "Today"
                              ? blue[500]
                              : event.status.includes("Past")
                              ? "error"
                              : green["A700"]
                          }>
                          {event.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Link to={`/events/${event.slug}`}>See more</Link>
                      </TableCell>
                    </TableRow>
                  )
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={events.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
