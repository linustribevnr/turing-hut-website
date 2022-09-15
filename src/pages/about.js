import React from "react";
import Faqs from "../components/Faqs";
import Layout from "../components/Layout";
import VisionMission from "../components/VisionMission";

export default function aboutPage() {
  return (
    <Layout>
      <VisionMission />
      <Faqs />
    </Layout>
  );
}
