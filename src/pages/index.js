import React from "react";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import UpcomingEvents from "../components/UpcomingEvents";
import Activities from "../components/Activities";
import { Seo } from "../components/Seo";
import "../styles/global.css";

export const Head = () => <Seo routename={"Home"} />;

function indexPage() {
  return (
    <Layout>
      <Landing />
      <Activities />
      <UpcomingEvents />
    </Layout>
  );
}

export default indexPage;
