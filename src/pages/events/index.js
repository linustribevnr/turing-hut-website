import React from "react";
import Layout from "../../components/Layout";
import { Box, Typography } from "@mui/material";
import UpcomingEvents from "../../components/UpcomingEvents";
import EventsTable from "../../components/EventsTable";
export default function EventsPage() {
  return (
    <Layout>
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h5"
          color="black"
          fontWeight={"bold"}
          sx={{ display: "inline" }}>
          Our&nbsp;
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          fontWeight={"bold"}
          sx={{ display: "inline" }}>
          Events.
        </Typography>
        <Typography variant="body1">
          Questions? Please contact turinghut@vnrvjiet.in
        </Typography>
      </Box>
      <UpcomingEvents />
      <EventsTable />
    </Layout>
  );
}
