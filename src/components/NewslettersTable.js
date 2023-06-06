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

export default function NewslettersTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("Date");
  const header = ["Name", "Date"];
  const data = useStaticQuery(graphql`
    query newsletters {
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

  const newsletters = data.allMarkdownRemark.nodes
    .map(newsletter => {
      const givendate = new Date(newsletter.frontmatter.date);
      const today = new Date();
      const options = { year: "numeric", month: "short", day: "numeric" };

      return {
        id: newsletter.id,
        name: newsletter.frontmatter.title,
        date: new Date(newsletter.frontmatter.date).toLocaleDateString(
          "en-US",
          options
        ),
        slug: newsletter.frontmatter.slug,
        markdown_type: newsletter.frontmatter.markdownType
      };
    })
    .filter(newsletter => newsletter.markdown_type === "newsletter");

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - newsletters.length) : 0;

  const handleChangePage = (newsletter, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = newsletter => {
    setRowsPerPage(parseInt(newsletter.target.value, 10));
    setPage(0);
  };

  const createSortHandler = property => newsletter => {
    setOrderBy(property);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  function getSortednewsletters(newsletters) {
    return newsletters.sort((x, y) => {
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
        <Typography variant="h6" color="primary" align="center">
          Directory of Newsletters
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
        <Table sx={{ minWidth: 200 }} aria-label="newsletter table">
          <TableHead>
            <TableRow>
              {header.map((val, i) => (
                <TableCell
                  key={i}
                  align={["Name", "Date"].includes("Name") ? "center" : "right"}
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
              <TableCell align="center">See More</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? getSortednewsletters(newsletters).slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : getSortednewsletters(newsletters)
            ).map(
              newsletter =>
                newsletter.name.toLowerCase().includes(search) && (
                  <TableRow
                    key={newsletter.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 }
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {newsletter.name}
                    </TableCell>
                    <TableCell align="center">{newsletter.date}</TableCell>

                    <TableCell align="center">
                      <Link to={`/newsletters/${newsletter.slug}`}>
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
                count={newsletters.length}
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
