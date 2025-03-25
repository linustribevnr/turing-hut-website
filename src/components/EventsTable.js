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
  TableFooter,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
  Grid,
  Chip,
  CardActionArea,
  alpha,
  Button,
  Grow
} from "@mui/material";
import { green, red } from "@mui/material/colors";
import EventIcon from "@mui/icons-material/Event";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { visuallyHidden } from "@mui/utils";
import { Link, graphql, useStaticQuery } from "gatsby";
import TableRowsIcon from "@mui/icons-material/TableRows";
import GridViewIcon from "@mui/icons-material/GridView";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function EventsPage() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("Date");
  const [view, setView] = useState("table");

  const header = ["Name", "Date", "Type"];
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

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const createSortHandler = property => () => {
    setOrderBy(property);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const handleViewChange = (event, newView) => {
    if (newView) setView(newView);
  };

  function getSortedEvents(events) {
    return events.sort((x, y) => {
      const a = x[orderBy.toLowerCase()];
      const b = y[orderBy.toLowerCase()];
      if (orderBy === "Date") {
        const ad = new Date(a);
        const bd = new Date(b);
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
    <Box sx={{ my: 4, mx: 4 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ pb: 2 }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{ fontWeight: "bold", fontSize: "1.7rem" }}
        >
          Directory of Events
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TextField
            label="Search"
            type="search"
            variant="standard"
            onChange={e => setSearch(e.target.value.toLowerCase())}
          />
          <ManageSearchIcon
            label="Search"
            sx={{
              fontSize: 38,
              color: "primary",
              marginBottom: -3,
              marginLeft: 0.5
            }}
          />
        </div>
      </Box>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        sx={{
          mb: 2,
          "& .MuiToggleButton-root": { px: 1.5, py: 0.5, fontSize: "0.875rem" }
        }}
      >
        <ToggleButton value="table">
          <TableRowsIcon sx={{ fontSize: 18, mr: 0.5 }} /> Table
        </ToggleButton>
        <ToggleButton value="grid">
          <GridViewIcon sx={{ fontSize: 18, mr: 0.5 }} /> Grid
        </ToggleButton>
      </ToggleButtonGroup>

      {view === "table" ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#92d3c0" }}>
              <TableRow>
                {header.map((val, i) => (
                  <TableCell key={i} align={val === "Name" ? "left" : "right"}>
                    <TableSortLabel
                      active={orderBy === val}
                      direction={order}
                      onClick={createSortHandler(val)}
                      sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                    >
                      {val}
                      {orderBy === val && (
                        <Box component="span" sx={visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </Box>
                      )}
                    </TableSortLabel>
                  </TableCell>
                ))}

                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: "bold", fontSize: "1.05rem" }}
                >
                  See More
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getSortedEvents(events)
                .filter(event => event.name.toLowerCase().includes(search))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(event => (
                  <TableRow
                    key={event.id}
                    sx={{ "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" } }}
                  >
                    <TableCell>{event.name}</TableCell>
                    <TableCell align="right">{event.date}</TableCell>
                    <TableCell align="right">{event.type}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: event.status.includes("Past")
                        ? red[500]
                        : event.status.includes("Upcoming")
                          ? 
                          green[500]
                          :
                          "#1a8cff",
                          fontWeight:500
                      }}
                    >
                      {event.status}
                    </TableCell>
                    <TableCell align="right">
                      <Link to={`/events/${event.slug}`}>See more</Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[10, 15, 20]}
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
      ) : (
        <Grid container spacing={3}>
          {getSortedEvents(events)
            .filter(event =>
              event.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <Grow
                  in={true}
                  timeout={(index + 1) * 200}
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Card
                    sx={{
                      border: "1px solid",
                      borderColor: "transparent",
                      borderRadius: 2,
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                      overflow: "hidden",
                      position: "relative",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-4px) scale(1.02)",
                        borderColor: alpha("#16654F", 0.3),
                        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.18)",
                        "& .see-details-btn": {
                          backgroundColor: "#00452F"
                        },
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                          opacity: 1
                        }
                      },
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        background:
                          "linear-gradient(90deg,rgb(4, 71, 52) 0%, #36856F 100%)"
                      }
                    }}
                  >
                    <CardActionArea
                      component={Link}
                      to={`/events/${event.slug}`}
                      sx={{
                        height: "100%",
                        textDecoration: "none"
                      }}
                    >
                      <CardContent
                        sx={{
                          p: 3,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column"
                        }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 1
                            }}
                          >
                            <Chip
                              label={event.status}
                              size="small"
                              sx={{
                                color: "white",
                                fontWeight: "medium",
                                backgroundColor: event.status.includes("Past")
                                  ? red[500]
                                  : event.status.includes("Upcoming")
                                    ? 
                                    green[500]
                                    :
                                    "#1a8cff"
                              }}
                            />
                            <Chip
                              label={event.type}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: "#36856F",
                                color: "#26755F"
                              }}
                            />
                          </Box>
                          <Typography
                            variant="h6"
                            component="h2"
                            sx={{
                              fontWeight: "bold",
                              color: "#00452F",
                              lineHeight: 1.2
                            }}
                          >
                            {event.name}
                          </Typography>
                        </Box>

                        <Box sx={{ mt: "auto" }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mb: 1
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <EventIcon
                                sx={{ color: "#36856F", fontSize: 18, mr: 1 }}
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {event.date}
                              </Typography>
                            </div>

                            <Button
                              className="see-more-btn"
                              disableRipple
                              size="small"
                              sx={{
                                backgroundColor: "#16654F",
                                color: "white",
                                borderRadius: "20px",
                                px: 2,
                                py: 0.5,
                                fontSize: "0.75rem",
                                fontWeight: "medium",
                                textTransform: "none",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                  backgroundColor: "#00452F"
                                }
                              }}
                            >
                              See Details
                              <ArrowForwardIcon
                                className="arrow-icon"
                                sx={{
                                  ml: 0.5,
                                  fontSize: 16,
                                  transition: "all 0.3s ease",
                                  transform: "translateX(0)",
                                  opacity: 0.7
                                }}
                              />
                            </Button>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                              mt: 2,
                              pt: 2,
                              borderTop: "1px solid",
                              borderTopColor: alpha("#000", 0.06)
                            }}
                          >
                            <Box
                              className="see-details-btn"
                              sx={{
                                backgroundColor: "#16654F",
                                color: "white",
                                borderRadius: "20px",
                                px: 2,
                                py: 0.5,
                                fontSize: "0.75rem",
                                fontWeight: "medium",
                                display: "flex",
                                alignItems: "center",
                                transition: "all 0.3s ease"
                              }}
                            >
                              See Details
                              <ArrowForwardIcon
                                className="arrow-icon"
                                sx={{
                                  ml: 0.5,
                                  fontSize: 16,
                                  transition: "all 0.3s ease",
                                  transform: "translateX(0)",
                                  opacity: 0.7
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grow>
              </Grid>
            ))}
        </Grid>
      )}
    </Box>
  );
}
