import React from "react";
import Layout from "../../components/Layout";
import EventsTable from "../../components/EventsTable";
import UpcomingEvents from "../../components/UpcomingEvents";
export default function EventsPage() {
  return (
    <Layout>
      <UpcomingEvents />
      <EventsTable />
    </Layout>
  );
}
