import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import UpcomingEvents from "../components/UpcomingEvents";
function indexPage() {
  return (
    <Layout>
      <Landing />
      <UpcomingEvents />
    </Layout>
  );
}

export default indexPage;
