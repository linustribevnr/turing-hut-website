import React from "react";
import Layout from "../../components/Layout";
import EventsTable from "../../components/EventsTable";
import { Seo } from "../../components/Seo";
export const Head = () => <Seo routename={"Events"} />;
export default function EventsPage() {
  return (
    <Layout>
      <EventsTable />
    </Layout>
  );
}
